'use strict';

let {defineSupportCode} = require('cucumber');
let db = require('../../support/db');

defineSupportCode(function({Given}) {

  Given('a user with valid credentials at login page', function () {

    db.filter((user) => true);
    log.debug("Selected user: " + db.user.username + ": " + db.user.email);

  });

  Given('a user at login screen', function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });


});


