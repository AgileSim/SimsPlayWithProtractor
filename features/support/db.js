'use strict';

const db = require('./db');
const World = require('./world');

function getProduct(category, condition) {
  let productList = [];
  if(typeof(condition) == 'function') {
    if(self.user.products[category]) {
      self.user.products[category].forEach(function(product){
        if(condition(product)) {
          productList.push(product)
        }
      })
    }
  } else {
    if(!condition) {
      productList = self.user.products[category];
    } else {
      throw "Error. condition must be a filter function."
    }
  }
  return productList;
}


var self = {
  db: [], //initial users database
//  users: [],
  user: {},
  account: {},
  card: {},
  selection: [], //array where store user that match given selectors

  filter: function(_where) {
    self.selection = self.selection.filter(_where);
    if(self.selection.length > 0) {
      self.user = self.selection[0];
    } else {
      throw "Error! Can not find users with given conditions."
    }
  },

  select: {
    account: function(condition) {
      let list = getProduct("accounts", condition);
      if(list && list.length > 0) {
        self.account = list[0];
        self.accounts = list;
      } else {
        throw "Error. Can't find any account with given conditions"
      }

    },
    card: function(condition) {
      let list = getProduct("cards", condition);
      if(list && list.length > 0){
        self.card = list[0];
        self.cards = list;
      } else {
        throw "Error. Can't find any card with given conditions"
      }
    },
    loan: function(condition) {
      let list = getProduct("loans", condition);
      if(list && list.length > 0){
        self.loan = list[0];
        self.loans = list;
      } else {
        throw "Error. Can't find any loan with given conditions"
      }
    }
  }

};

module.exports = self;