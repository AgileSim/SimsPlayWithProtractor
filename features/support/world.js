"use strict";

const cucumber = require('cucumber');
const log4js = require('log4js');
const Path = require('path');
const simsLoader = require('./sims');
const chai = require('chai');

let world = {

  sims: [],

  constructor: function({atach, parameters}) {
    global.log = log4js.getLogger();
    log.setLevel('debug');
    log.debug("++++++++++++++  world.js ++++++++++++++++++");
    log.debug("Loading Sims...");
    world.sims = simsLoader.load(Path.resolve(__dirname + '/../../node_modules/sims'));
    log.debug("--------------  world.js ------------------");
    global.assert = chai.assert;
  }

};



cucumber.defineSupportCode(function ({setWorldConstructor}) {

  setWorldConstructor(world.constructor);

});

module.exports = world;