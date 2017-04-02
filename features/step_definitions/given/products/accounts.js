'use strict';

let {defineSupportCode} = require('cucumber');
let db = require('../../../support/db');

defineSupportCode(function({Given}) {
  Given('a user with current accounts', function () {
    db.filter((user) => (user.products && user.products.accounts && user.products.accounts.length > 0));
    log.debug("Selected user: " + db.user.credentials.username + ": " + db.user.email);
  });
});


