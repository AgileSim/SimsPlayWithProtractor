'use strict';

let {defineSupportCode} = require('cucumber');
let db = require('../../support/db');
let gps = require('../../support/gps');
let poLogin = require('../../page_objects/login');

defineSupportCode(function({Given}) {

  Given('a user with valid credentials at login page', function () {
    db.filter((user) => true);
    log.debug("Selected user: " + db.user.username + ": " + db.user.email);
    return poLogin.go();
  });

  Given('a user at login screen', function () {
    db.filter((user) => true);
    log.debug("Selected user: " + db.user.username + ": " + db.user.email);
    return poLogin.go();
  });

});


