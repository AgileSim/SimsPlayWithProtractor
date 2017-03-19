'use strict';

let {defineSupportCode} = require('cucumber');
let db = require('../../support/db');
const gps = require('../../support/gps');

defineSupportCode(function({Then}) {

  Then('he should see an error message', function () {
    return gps.current.assert.visible.label.errorMessage();
  });

});
