'use strict';


let {defineSupportCode} = require('cucumber');
let db = require('./db');
let world = require('./world');

defineSupportCode(function({After, Before}) {
  // Synchronous
  Before(function () {
    browser.get("index.html");
    //reset sims selection to all (Delete all filters)
    db.selection = world.sims;
  });

  After(function () {
    // browser.close();
  });

});