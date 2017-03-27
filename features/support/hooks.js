'use strict';

let {defineSupportCode} = require('cucumber');
let db = require('./db');
let world = require('./world');

defineSupportCode(function({After, Before}) {
  // Synchronous
  Before(function () {
    browser.get('');
    //reset sims selection to all (Delete all filters)
    db.selection = world.sims;
    db.user = db.selection[0];
  });

  After(function () {
    //browser.close();
  });

});