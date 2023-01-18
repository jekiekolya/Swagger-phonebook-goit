'use strict';


/**
 * Get info about current user
 *
 * returns UserCurrentResponse
 **/
exports.getCurrentUser = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 200,
  "data" : {
    "user" : {
      "_id" : "63c84387ed28e53b70097d92",
      "subscription" : "starter",
      "email" : "example@example.com"
    }
  },
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
 * Update user avatars
 *
 * returns UserAvatarResponse
 **/
exports.updateAvatarUser = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 200,
  "data" : {
    "avatarURL" : "https://res.cloudinary.com/dpvkleqce/image/upload/v1674075319/avatars_phonebook/xppczsplfojjh1p1ecvs.png"
  },
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
 * Update user subscription
 *
 * body UserUpdateSubscription 
 * returns UserCurrentResponse
 **/
exports.updateSubscriptionUser = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 200,
  "data" : {
    "user" : {
      "_id" : "63c84387ed28e53b70097d92",
      "subscription" : "starter",
      "email" : "example@example.com"
    }
  },
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
 * Resent a verification letter to the user email
 *
 * body UserUpdateVerificationEmail 
 * returns UserUpdateVerificationEmailResponse
 **/
exports.updateVerificationUserEmail = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 200,
  "data" : {
    "message" : "A verification letter was sent to the email - example@example.com",
    "user" : {
      "verificationToken" : "1k4dz29ld1r96rz",
      "email" : "example@example.com"
    }
  },
  "status" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

