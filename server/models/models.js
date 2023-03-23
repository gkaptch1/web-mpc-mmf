/**
 * Database Models
 */

'use strict';

const mongoose = require('mongoose');

(async function () {
  try {
    await mongoose.connect('mongodb://localhost/aggregate', { useMongoClient: true });
  } catch (err) {
    console.log('Could not connect to MongoDB server', err);
  }
}());

const cohortMappingSchema = new mongoose.Schema({
  name: String,
  id: Number,
  tags: [String]
});

// Mongoose Model definitions
const HistoryModel = mongoose.model('History', new mongoose.Schema({
  // Keeps track of submission history
  session: String,
  jiff_party_id: Number,
  participant_id: String,
  date: Number,
  success: Boolean
}));
const MailboxModel = mongoose.model('Mailbox', new mongoose.Schema({
  // Store messages/shares
  _id: String, // "session:from_id:to_id:op_id"
  session: String, // Session Key
  from_id: String, // Sender id
  to_id: String, // either 1 or s1
  op_id: String,
  label: String,
  message: String
}));
const SessionInfoModel = mongoose.model('SessionInfo', new mongoose.Schema({
  _id: String,
  session: String,
  pub_key: String,
  password: String,
  title: String,
  description: String,
  status: String,
  cohorts: Number,
  cohort_mapping: [cohortMappingSchema]
},
  {
    usePushEach: true
  }));
const UserKeyModel = mongoose.model('UserKey', new mongoose.Schema({
  _id: String, // concat of session + userkey.
  session: String,
  userkey: String,
  pseudonymn: String,
  jiff_party_id: Number,
  cohort: Number,
  pub_key: String,
  subscriber: {
    type: Boolean,
    default: false
  }
}));
const ResultMessageModel = mongoose.model('ResultMessage', new mongoose.Schema({
  _id: String, // concat of session + userkey.
  session: String,
  userkey: String,
  analystmessages: String,
  servermessages: String,
  pseudonymn: String
}));
const ComputationOutputsModel = mongoose.model('ComputationOutputs', new mongoose.Schema({
  _id: String, // concat of session + computationname.
  session: String,
  computationname: String,
  resultsstring: String, // JSON stringify 
}));
const SaveStateModel = mongoose.model('SaveState', new mongoose.Schema({
  _id: String, // concat of session + computationname.
  session: String,
  computationname: String,
  role: String,
  savestatestring: String, // JSON stringify 
}));

// Export models
module.exports = {
  History: HistoryModel,
  Mailbox: MailboxModel,
  SessionInfo: SessionInfoModel,
  UserKey: UserKeyModel,
  ResultMessage: ResultMessageModel,
  ComputationOutputs: ComputationOutputsModel,
  SaveState: SaveStateModel
};
