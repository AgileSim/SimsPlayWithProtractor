'use strict';

const db = require('../support/db');
const gps = require('../support/gps');
const poLogin = require('./login');

let view = {
  css: {
    title: '.qa-header-container',
    products:{
    }
  }
};

let strings = {
  "title": "Posición Global",
}


let self = {

  go: function () {
    if(db.user === undefined && db.user === "") {
      throw new Error("Error. Can't access into Global Position without selecting any user");
    }
    else {
      poLogin.go()
        .then(poLogin.perform.business.enterCredentials(db.user))
    }
  },

  assert: {
    visible: {
      title: function() {
        return browser.element(by.css(view.css.title)).isDisplayed()
          .getText().then((text) => {
            assert(text === strings.title, "Error. Expenting title: <" + strings.title + ">. But found: <" + text + ">.");
          })
      }
    }
  },

  perform: {

  }

};

module.exports = self;