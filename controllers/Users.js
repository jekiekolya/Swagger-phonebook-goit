'use strict';

var utils = require('../utils/writer.js');
var Users = require('../service/UsersService');

module.exports.getCurrentUser = function getCurrentUser (req, res, next) {
  Users.getCurrentUser()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAvatarUser = function updateAvatarUser (req, res, next) {
  Users.updateAvatarUser()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateSubscriptionUser = function updateSubscriptionUser (req, res, next, body) {
  Users.updateSubscriptionUser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateVerificationUserEmail = function updateVerificationUserEmail (req, res, next, body) {
  Users.updateVerificationUserEmail(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
