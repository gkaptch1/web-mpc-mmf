/**
 * Define JOI schemas to validate request payloads.
 */

const joi = require('joi');

// Use helpers to generate base joi schemas: these are building blocks for the schemas of requests.
// TODO: set length restrictions on sessionKey and userKey
const schemaTemplates = {
  sessionKeySchema: joi.string().alphanum().required(),
  userKeySchema: joi.string().alphanum().required(),
  passwordSchema: joi.string().alphanum().required(),
};
schemaTemplates.keyPasswordTemplate = {
  session: schemaTemplates.sessionKeySchema,
  password: schemaTemplates.passwordSchema
};

const analystServerUpdateTemplate = {
  pseudonymn: joi.string().alphanum().required(),
  analystMessage: joi.string().required()
};

// Concrete Request schemas!
module.exports = {
  getStatus: {
    session: schemaTemplates.sessionKeySchema
  },

  getSessionInfo: {
    session: schemaTemplates.sessionKeySchema,
    userkey: schemaTemplates.userKeySchema
  },

  createSession: { // TODO: should be more restrictive here
    publickey: joi.string().required(),
    title: joi.string().required(),
    description: joi.string().required()
  },

  getCohorts: {
    session: schemaTemplates.sessionKeySchema,
    userkey: schemaTemplates.userKeySchema
  },

  getUser: {
    session: schemaTemplates.sessionKeySchema,
    userkey: schemaTemplates.userKeySchema
  },

  getClientKeys: Object.assign({}, schemaTemplates.keyPasswordTemplate),

  getCohortsManage: Object.assign({}, schemaTemplates.keyPasswordTemplate),

  createNewCohort: Object.assign({
    cohorts: joi.array().items(joi.string().allow(null)).required(),
  }, schemaTemplates.keyPasswordTemplate),

  getClientUrls: Object.assign({}, schemaTemplates.keyPasswordTemplate),

  createClientUrls: Object.assign({
    count: joi.number().integer().min(0).max(10000).required(),
    cohort: joi.string().required(), 
    subscriber: joi.boolean().required()
  }, schemaTemplates.keyPasswordTemplate),

  getSubmissionHistory: Object.assign({
    last_fetch: joi.number().required() // TODO: enforce time stamp
  }, schemaTemplates.keyPasswordTemplate),

  setStatus: Object.assign({
    status: joi.only('START', 'STOP', 'PAUSE').required()
  }, schemaTemplates.keyPasswordTemplate),

  registerKeyToUser: {
      session: schemaTemplates.sessionKeySchema,
      userkey: schemaTemplates.userKeySchema,
      key: joi.string().required() // Maybe base64
  },

  getResultMessage: {
    session: schemaTemplates.sessionKeySchema,
    userkey: schemaTemplates.userKeySchema
  },

  analystBulkUpdateResultMessages : Object.assign({
      data: joi.array().items(analystServerUpdateTemplate),
  }, schemaTemplates.keyPasswordTemplate),
};



// Export JOI schemas
for (var name in module.exports) {
  if (module.exports.hasOwnProperty(name)) {
    module.exports[name] = joi.object().keys(module.exports[name]);
  }
}
