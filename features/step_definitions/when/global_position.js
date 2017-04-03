//'use strict';
//
//const {defineSupportCode} = require('cucumber');
//const poLogin = require('../../page_objects/login');
//const poGlobalPosition = require('../../page_objects/global_position');
//const db = require('../../support/db');
//
//defineSupportCode(function({When}) {
//  When('he access his global position', function () {
//    return poLogin.go()
//      .then(() => {return poLogin.perform.business.enterCredentials(db.user)})
//      .then(poGlobalPosition.assert.visible.title);
//  });
//
//});