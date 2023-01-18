'use strict';


/**
 * User login (Only after verified email)
 *
 * body UserRegistration 
 * returns UserloginResponse
 **/
exports.userLogin = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 200,
  "data" : {
    "user" : {
      "avatarURL" : "//www.gravatar.com/avatar/85853db052e8e289c083261f1b6babaf",
      "subscription" : "example@example.com",
      "email" : "example@example.com"
    },
    "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzNlZDdhZDgwN2JjMjgzOTk4Y2UyYyIsImlhdCI6MTY3Mzc4NDc2MiwiZXhwIjoxNjczNzg4MzYyfQ.gkvHFaL3a8pKOa-Z0zooHoJuRAKFONj7feaiEzaS4Co"
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
 * User logout
 *
 * no response value expected for this operation
 **/
exports.userLogout = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * User registration
 *
 * body UserRegistration 
 * returns UserRegistrated
 **/
exports.userRegistration = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 200,
  "data" : {
    "user" : {
      "avatarURL" : "//www.gravatar.com/avatar/85853db052e8e289c083261f1b6babaf",
      "verificationToken" : "1k4dz29ld1ralye",
      "subscription" : "example@example.com",
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
 * Verification user email
 *
 * verificationToken String token for verification user email
 * returns UserVerified
 **/
exports.verificationUserEmail = function(verificationToken) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 200,
  "data" : {
    "message" : "Verification successful"
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

