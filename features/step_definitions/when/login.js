'use strict';

let {defineSupportCode} = require('cucumber');
let db = require('../../support/db');

defineSupportCode(function({When}) {

  When('he introduces his credentials', function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  When('he introduces wrong credentials', function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

});
