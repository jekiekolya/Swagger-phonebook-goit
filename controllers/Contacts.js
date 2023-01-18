'use strict';

var utils = require('../utils/writer.js');
var Contacts = require('../service/ContactsService');

module.exports.createContact = function createContact (req, res, next, body) {
  Contacts.createContact(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteContactById = function deleteContactById (req, res, next, contactId) {
  Contacts.deleteContactById(contactId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllContacts = function getAllContacts (req, res, next, favorite, page, limit) {
  Contacts.getAllContacts(favorite, page, limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getContactById = function getContactById (req, res, next, contactId) {
  Contacts.getContactById(contactId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateContactById = function updateContactById (req, res, next, body, contactId) {
  Contacts.updateContactById(body, contactId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateContactFavoriteById = function updateContactFavoriteById (req, res, next, body, contactId) {
  Contacts.updateContactFavoriteById(body, contactId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
