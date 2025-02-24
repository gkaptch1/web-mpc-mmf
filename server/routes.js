/**
 * Route definitions.
 * Each object in the module.exports array is a single route.
 * Each object must define a url suffix for the route, a route function, a joi validation schema, and an optional authentication function.
 *
 * The route function is of type function(context{object}, request_body{object}, response{express response}, [ authentication_output])
 *    where authentication_output is the result of the authentication function.
 *
 * Validation schema must be defined using the joi library, check ./app/validation.js for examples.
 *
 * The authentication function must be of type function(request_body{object}, response{express response}, callback{function{boolean, object}})
 *    where callback must be called with parameters (false, <error_string_message>) if authentication fails
 *           or with parameters (true, <optional_output_object>) if authentication is successfull.
 *
 * Validation is performed automatically, followed by authentication if provided. Any failures here will result
 * in a 500 response code, with the appropriate error message. If both are successful, the route function is executed.
 */

// JOI validation schemas
const validation = require('./app/validation.js');
const auth = require('./app/auth.js');

// Route functionality
const sessionRoutes = require('./app/session.js');
const sessionStatusRoutes = require('./app/sessionStatus.js');
const clientURLsRoutes = require('./app/clientUrls.js');

// Route map
module.exports = [
  // Session creation and query routes
  { url: '/create_session', route: sessionRoutes.createSession, validation: validation.createSession },
  { url: '/sessioninfo', route: sessionRoutes.getSessionInfo, validation: validation.getSessionInfo, authentication: auth.userKey },
  { url: '/get_cohorts', route: clientURLsRoutes.getCohorts, validation: validation.getCohorts, authentication: auth.userKey},
  { url: '/get_user', route: clientURLsRoutes.getUser, validation: validation.getCohorts, authentication: auth.userKey},

  // Session status and history routes
  { url: '/fetch_status', route: sessionStatusRoutes.getStatus, validation: validation.getStatus },
  { url: '/change_status', route: sessionStatusRoutes.setStatus, validation: validation.setStatus, authentication: auth.password },
  { url: '/get_history', route: sessionStatusRoutes.getSubmissionHistory, validation: validation.getSubmissionHistory, authentication: auth.password },

  // Routes to generate and query (client urls / user keys / participation code)
  { url: '/add_cohort', route: clientURLsRoutes.createNewCohort, validation: validation.createNewCohort, authentication: auth.password },
  { url: '/get_cohorts_manage', route: clientURLsRoutes.getCohorts, validation: validation.getCohortsManage, authentication: auth.password},
  { url: '/generate_client_urls', route: clientURLsRoutes.createClientUrls, validation: validation.createClientUrls, authentication: auth.password },
  { url: '/get_client_urls', route: clientURLsRoutes.getClientUrls, validation: validation.getClientUrls, authentication: auth.password },

  // Adding a key for subscribers
  { url: '/subscribe_with_key', route: clientURLsRoutes.registerKeyToUser, validation: validation.registerKeyToUser, authentication: auth.userKey },

  // Adding the ability to retrieve all of the user public keys
  { url: '/get_client_public_keys', route: clientURLsRoutes.getClientKeys, validation: validation.getClientKeys, authentication: auth.password },
  { url: '/update_shares', route: clientURLsRoutes.updateShares, validation: validation.updateShares, authentication: auth.password },
  { url: '/update_shares_by_pseudonym', route: clientURLsRoutes.updateSharesByPseudonym, validation: validation.updateSharesByPseudonym, authentication: auth.password },

  { url: '/bulk_update_result_messages', route: clientURLsRoutes.analystBulkUpdateResultMessages, validation: validation.analystBulkUpdateResultMessages, authentication: auth.password },
    // Adding the ability for clients to pull all their encrypted shares
  { url: '/get_result_messages', route: clientURLsRoutes.getResultMessage, validation: validation.getResultMessage, authentication: auth.userKey },

  { url: '/store_save_state', route: clientURLsRoutes.analystStoreSaveState, validation: validation.analystStoreSaveState, authentication: auth.password },
  { url: '/get_save_state', route: clientURLsRoutes.analystGetSaveState, validation: validation.analystGetSaveState, authentication: auth.password },


];
