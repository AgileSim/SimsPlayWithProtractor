'use strict';

let {defineSupportCode} = require('cucumber');
let db = require('../../support/db');

defineSupportCode(function({Then}) {

  Then('he should see an error message', function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

});
