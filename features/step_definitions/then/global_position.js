'use strict';

let {defineSupportCode} = require('cucumber');
let db = require('../../support/db');
let gps = require('../../support/gps');

defineSupportCode(function({Then}) {

  Then('he should view his global position', function () {
    return gps.current.assert.visible.title();
  });

});
