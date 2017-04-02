'use strict';

let db = require('../support/db');
let poLogin = require('./login');

let view = {
  css: {
    title: '.bktx-header-container',
    products:{
      accounts: {
        group: 'account-statement-container bktx-products-container[title="ACCOUNTS"]',
        alias: '.account-statement-container bktx-products-container[title="ACCOUNTS"] .account-alias',
        number: '.account-statement-container bktx-products-container[title="ACCOUNTS"] .account-number',
        balance: '.account-statement-container bktx-products-container[title="ACCOUNTS"] .account-balance',
      }
    }
  }
};

let strings = {
  "title": "Posición Global",
};


let self = {

  go: function() {
    log.debug(" Init --->> page_objects/global_position.go() <<---");
    if(db.user === undefined && db.user === "") {
      throw new Error("Error. Can't access into Global Position without selecting any user");
    }
    else {
      return poLogin.go()
        .then(poLogin.perform.business.enterCredentials(db.user))
        .then(self.assert.visible.title)
    }
  },

  assert: {
    visible: {
      title: function() {
        return browser.element(by.css(view.css.title)).isDisplayed()
          .getText().then((text) => {
            console.log("Expecting title: <" + strings.title + ">. Found title: <" + text + ">.");
            return assert(text === strings.title, "Error. Expenting title: <" + strings.title + ">. But found: <" + text + ">.");
          })
      }
    },
    business: {
      validate: {
        account: {
          aliases: function (accounts) {
            return browser.element.all(by.css(view.css.products.accounts.alias))
              .getText().then((alias) => {
                log.debug("Got alias:      " + JSON.stringify(alias));
                let accAlias = accounts.map(acc => acc.alias);
                log.debug("Accounts alias: " + JSON.stringify(accAlias));
                return assert( alias.toString() === accAlias.toString(), "Error. Overall position page. Execting alias: " +
                  alias.toString() + ". Found: " + accAlias.toString());
              })
          },
          numbers: function (accounts) {
            return browser.element.all(by.css(view.css.products.accounts.number))
              .getText().then(number => {
                log.debug("Got numbers:      " + JSON.stringify(number));
                let accNumber = accounts.map(acc => acc.iban + " " + acc.number);
                log.debug("Accounts numbers: " + JSON.stringify(accNumber));
                return assert( number.toString() === accNumber.toString(), "Error. Overall position page. Execting number: " +
                  number.toString() + ". Found: " + accNumber.toString());
              })
          },
          balances: function (accounts) {
            return browser.element.all(by.css(view.css.products.accounts.balance))
              .getText().then(balances => {
                log.debug("Got balances:      " + JSON.stringify(balances));
                let accBalances = accounts.map(acc => acc.balance + " " + acc.currency);
                log.debug("Accounts balances: " + JSON.stringify(accBalances));
                return assert( balances.toString() === accBalances.toString(), "Error. Overall position page. Execting number: " +
                  balances.toString() + ". Found: " + accBalances.toString());
              })
          }
        },
        product: {
          accounts: function(accounts) {
            return self.assert.business.validate.account.aliases(accounts)
              .then(() => {return self.assert.business.validate.account.numbers(accounts)})
              .then(() => {return self.assert.business.validate.account.balances(accounts)})
          }
        },

      },
    }
  },

  perform: {

  }

};

module.exports = self;