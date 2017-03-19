'use strict';

const {defineSupportCode} = require('cucumber');
const db = require('../../support/db');
const gps = require('../../support/gps');

defineSupportCode(function({When}) {

  When('he introduces his credentials', function () {
    return gps.current.perform.business.enterCredentials(db.user);
  });

  When('he introduces wrong credentials', function () {
    return gps.current.perform.enter.input.username("INVALID_USER")
      .then(() => {return gps.current.perform.enter.input.password("INVALID_PASSPORD")})
      .then(gps.current.perform.click.button.enter);
  });

});
