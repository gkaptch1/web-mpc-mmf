const modulesWrappers = require('../models/modelWrappers');
const linked_list = require('../../jiff/lib/common/linkedlist.js');

// Mailbox:
// Messages from clients are stored in the mongodb database so that they
// are never lost.
// They are always in the database mailbox: when the analyst attempts to
// reconstruct, they are send to the analyst, but not deleted. So any further
// reconstructions will receive them again.
// Other messages (the ones exchanged between the server
// and analyst during reconstruction, or initialization related messages) are
// ephemeral.
// They do not need to be stored in the DB, or to survive restarts.
// They only need guaranteed delivery.
// Thus, these messages are stored in memory, and deleted when the reciepient
// acknowledges them.

// In memory mailbox.
const ephemeral_mailbox = {};
function putInMemory(label, msg, computation_id, to_id) {
  if (ephemeral_mailbox[computation_id] == null) {
    ephemeral_mailbox[computation_id] = {};
  }
  var computation_mailbox = ephemeral_mailbox[computation_id];
  if (computation_mailbox[to_id] == null) {
    computation_mailbox[to_id] = linked_list();
  }

  // add message to mailbox, return pointer
  return computation_mailbox[to_id].add({label: label, msg: msg});
}
function getFromMemory(computation_id, party_id) {
  var computation_mailbox = ephemeral_mailbox[computation_id];
  if (computation_mailbox == null) {
    return [];
  }
  if (computation_mailbox[party_id] == null) {
    computation_mailbox[party_id] = linked_list();
  }

  var result = [];
  var current_node = computation_mailbox[party_id].head;
  while (current_node != null) {
    var ptr = current_node;
    var object = current_node.object;
    result.push({ id: ptr, label: object.label, msg: object.msg });

    current_node = current_node.next;
  }

  return result;
}
function removeFromMemory(computation_id, party_id, mailbox_pointer) {
  if (ephemeral_mailbox[computation_id] != null) {
    if (ephemeral_mailbox[computation_id][party_id] != null) {
      ephemeral_mailbox[computation_id][party_id].remove(mailbox_pointer);
    }
  }
}

// Mailbox interface including both in memory and mongodb.
module.exports = {
  putInMailbox: async function (jiff, label, msg, computation_id, to_id) {
    // computation_id: same as session key
    // msg JSON string
    // label string: share / open / etc ..
    var tmp = JSON.parse(msg);
    if (label !== 'share' || (tmp['party_id'] == 's1' || tmp['party_id'] == 1)) {
      return putInMemory(label, msg, computation_id, to_id);
    }

    // The only thing that goes into the database are share messages from
    // clients.
    try {
      await modulesWrappers.Mailbox.upsert(computation_id, tmp['party_id'], to_id, tmp['op_id'], label, msg);
      return null;
    } catch (err) {
      console.log('Error in putting in mailbox', err);
      throw new Error('Unable to save aggregate, please try again.');
    }
  },

  getFromMailbox : async function (jiff, computation_id, to_id) {
    try {
      var result = [];

      // Read from database if server.
      if (to_id == 's1') {
        var db = await modulesWrappers.Mailbox.query(computation_id, to_id);
        for (var d of db) {
          result.push({msg: d.message, label: d.label, id: null});
        }
      }

      // Read from memory for reliability during computation.
      var memory = getFromMemory(computation_id, to_id);
      var public_key_msg = null;
      for (var d of memory) {
        if (d.label == 'public_keys') {
          public_key_msg = d;
        } else {
          result.push(d);
        }
      }

      // Put public_keys message upfront.
      if (public_key_msg != null) {
        result.unshift(public_key_msg);
      }

      console.log("Get from mail box", to_id, result.length);
      return result;
    } catch (err) {
      console.log('Error in getting mailbox', err);
      throw new Error('Error getting masks');
    }
  },

  // Logical slicing (without actual removing)
  sliceMailbox: function (jiff, computation_id, party_id, length) {
    // No-op. Only called by restful extension which is only used for clients.
  },
  // Do not remove anything from the mailbox/db ever
  removeFromMailbox: function (jiff, computation_id, party_id, mailbox_pointer) {
    if (mailbox_pointer != null) {
      // Corresponds to an ephemeral in memory message.
      removeFromMemory(computation_id, party_id, mailbox_pointer);
    }
  },
  // Get analyst shares that belong to the given party.
  getAnalystShares: async function (computation_id, from_id) {
    try {
      var db = await modulesWrappers.Mailbox.query(computation_id, 1, null, null, {"from_id" : from_id});

      var result = [];
      for (var d of db) {
        if (d.label == 'share') {
          var json = JSON.parse(d.message);
          if (json.party_id == from_id) {
            result.push(d.message);
          }
        }
      }

      return result;
    } catch (err) {
      console.log('Error in getting analyst share from ' + from_id, err);
      throw new Error('Error getting shares');
    }
  },
};
