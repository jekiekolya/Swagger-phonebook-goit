'use strict';


/**
 * Create new contact
 *
 * body ContactPost 
 * returns ContactAdded
 **/
exports.createContact = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "owner" : "63ab51f90560f4cc21ebdf18",
  "createdAt" : "2022-12-27T21:04:08.101Z",
  "phone" : "(542) 451-7038",
  "name" : "Kennedy Lane",
  "_id" : "63ab5dc892ae89f0b7efe639",
  "favorite" : false,
  "email" : "mattis.Cras@nonenimMauris.net",
  "updatedAt" : "2022-12-27T21:04:08.101Z"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete contact by id
 *
 * contactId String Contact id
 * returns ContactDeleted
 **/
exports.deleteContactById = function(contactId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 200,
  "message" : "contact deleted",
  "status" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all contacts
 *
 * favorite Boolean Filter for favorite contacts (optional)
 * page BigDecimal Number of pages (optional)
 * limit BigDecimal Number of contacts in the page (optional)
 * returns Contacts
 **/
exports.getAllContacts = function(favorite,page,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "owner" : {
    "_id" : "63ab51f90560f4cc21ebdf18",
    "subscription" : "starter",
    "email" : "example@example.com"
  },
  "createdAt" : "2022-12-27T21:04:08.101Z",
  "phone" : "(542) 451-7038",
  "name" : "Kennedy Lane",
  "_id" : "63ab5dc892ae89f0b7efe639",
  "favorite" : false,
  "email" : "mattis.Cras@nonenimMauris.net",
  "updatedAt" : "2022-12-27T21:04:08.101Z"
}, {
  "owner" : {
    "_id" : "63ab51f90560f4cc21ebdf18",
    "subscription" : "starter",
    "email" : "example@example.com"
  },
  "createdAt" : "2022-12-27T21:04:08.101Z",
  "phone" : "(542) 451-7038",
  "name" : "Kennedy Lane",
  "_id" : "63ab5dc892ae89f0b7efe639",
  "favorite" : false,
  "email" : "mattis.Cras@nonenimMauris.net",
  "updatedAt" : "2022-12-27T21:04:08.101Z"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get contact by id
 *
 * contactId String Contact id
 * returns Contact
 **/
exports.getContactById = function(contactId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "owner" : {
    "_id" : "63ab51f90560f4cc21ebdf18",
    "subscription" : "starter",
    "email" : "example@example.com"
  },
  "createdAt" : "2022-12-27T21:04:08.101Z",
  "phone" : "(542) 451-7038",
  "name" : "Kennedy Lane",
  "_id" : "63ab5dc892ae89f0b7efe639",
  "favorite" : false,
  "email" : "mattis.Cras@nonenimMauris.net",
  "updatedAt" : "2022-12-27T21:04:08.101Z"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update contact by id
 *
 * body ContactPost 
 * contactId String Contact id
 * returns ContactAdded
 **/
exports.updateContactById = function(body,contactId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "owner" : "63ab51f90560f4cc21ebdf18",
  "createdAt" : "2022-12-27T21:04:08.101Z",
  "phone" : "(542) 451-7038",
  "name" : "Kennedy Lane",
  "_id" : "63ab5dc892ae89f0b7efe639",
  "favorite" : false,
  "email" : "mattis.Cras@nonenimMauris.net",
  "updatedAt" : "2022-12-27T21:04:08.101Z"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update contact favorite by id
 *
 * body ContactUpdateFavorite 
 * contactId String Contact id
 * returns ContactAdded
 **/
exports.updateContactFavoriteById = function(body,contactId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "owner" : "63ab51f90560f4cc21ebdf18",
  "createdAt" : "2022-12-27T21:04:08.101Z",
  "phone" : "(542) 451-7038",
  "name" : "Kennedy Lane",
  "_id" : "63ab5dc892ae89f0b7efe639",
  "favorite" : false,
  "email" : "mattis.Cras@nonenimMauris.net",
  "updatedAt" : "2022-12-27T21:04:08.101Z"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

