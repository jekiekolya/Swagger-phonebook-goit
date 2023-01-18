'use strict';

var utils = require('../utils/writer.js');
var Auth = require('../service/AuthService');

module.exports.userLogin = function userLogin (req, res, next, body) {
  Auth.userLogin(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userLogout = function userLogout (req, res, next) {
  Auth.userLogout()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userRegistration = function userRegistration (req, res, next, body) {
  Auth.userRegistration(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.verificationUserEmail = function verificationUserEmail (req, res, next, verificationToken) {
  Auth.verificationUserEmail(verificationToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
