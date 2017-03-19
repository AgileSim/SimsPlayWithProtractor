'use strict';

const gps = require('../support/gps');
const poGlobalPosition = require('./global_position');

let view = {
  css: {
    title: '.qa-header-container',
    input: {
      username: ".login-user",
      password: ".login-password"
    },
    button: {
      enter: '.login-submit-button'
    },
    errorMessages: ".login-container span"
  }
};

let strings = {
  "title": "BANKTRIX",
  "errors": {
    "invalid_credentials": "Usuario o contraseña incorrectos"
  }
};


let self = {

  go: function() {
    return self.assert.visible.title()
      .then(()=>{gps.setCurrent(this);});
  },

  assert: {
    visible: {
      title: function() {
        return browser.element(by.css(view.css.title)).isDisplayed()
          .getText().then((text) => {
            assert(text === strings.title, "Error. Expenting title: <" + strings.title + ">. But found: <" + text + ">.");
          })
      },
      label: {
        errorMessage: function () {
          return browser.element(by.css(view.css.errorMessages)).isDisplayed()
        }
      },
      input: {
        username: function () {
          return browser.element(by.css(view.css.input.username)).isDisplayed();
        },
        password: function () {
          return browser.element(by.css(view.css.input.password)).isDisplayed();
        }
      }
    },
    enabled: {

    }
  },

  perform: {
    enter: {
      input: {
        username: function (username) {
          return browser.findElement(by.css(view.css.input.username)).sendKeys(username);
        },
        password: function (password) {
          return browser.findElement(by.css(view.css.input.password)).sendKeys(password);
        },

      }
    },
    click: {
      button: {
        enter: function () {
          return browser.findElement(by.css(view.css.button.enter)).click();
        }
      }
    },
    business: {
      enterCredentials: function (user) {
        console.log("Entering credentials for user: " + user.credentials.username);
        return self.perform.enter.input.username(user.credentials.username)
          .then(() =>  { return self.perform.enter.input.password((user.credentials.password)) })
          .then(self.perform.click.button.enter)
          .then(() => { gps.setCurrent(poGlobalPosition)});
      }
    }
  }

};

module.exports = self;