'use strict';

let {defineSupportCode} = require('cucumber');
let db = require('../support/db');
let poGlobalPosition = require('../page_objects/global_position');
let poLogin = require('../page_objects/login');

defineSupportCode(function({Given, When, Then}) {
  
  // Given('a user with current accounts', function () {
  //   db.filter((user) => (user.products && user.products.accounts && user.products.accounts.length > 0));
  //   log.debug("Selected user: " + db.user.credentials.username + ": " + db.user.email);
  // });
  //
  // When('he access his global position', function () {
  //   return poLogin.go()
  //     .then(() => {return poLogin.perform.business.enterCredentials(db.user)})
  //     .then(poGlobalPosition.assert.visible.title);
  // });
  //
  // Then('he sould see his accounts each with this information:', function (table) {
  //   let fields = [[ 'account alias' ],
  //     [ 'account number' ],
  //     [ 'account balance with currency symbol' ]];
  //
  //   if(table.rawTable.toString() !== fields.toString()) {
  //     throw "Error! Check fields beacause have changed after development"
  //   }
  //   return poGlobalPosition.assert.business.validate.product.accounts(db.user.products.accounts);
  // });

});

