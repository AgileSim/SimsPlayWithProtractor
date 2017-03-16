'use strict';

let {defineSupportCode} = require('cucumber');
let db = require('../support/db');

defineSupportCode(function({Given}) {

  Given('a user with valid credentials at login page', function () {

    db.filter((user) => true);
    log.debug("Selected user: " + db.user.username + ": " + db.user.email);

  });

});


