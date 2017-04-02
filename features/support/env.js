'use strict';

const cucumber = require('cucumber');

cucumber.defineSupportCode(function({setDefaultTimeout}) {
  setDefaultTimeout(60 * 1000);
});
