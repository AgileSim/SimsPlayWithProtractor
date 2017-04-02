'use strict';

let _ = require('lodash');
let {defineSupportCode} = require('cucumber');
let db = require('../../support/db');
let gps = require('../../support/gps');
const poGlobalPosition = require('../../page_objects/global_position');

defineSupportCode(function({Then}) {

  Then('he should view his global position', function () {
    return gps.current.assert.visible.title();
  });

  Then('he sould see his accounts each with this information:', function (table) {
    let fields = [[ 'account alias' ],
                  [ 'account number' ],
                  [ 'account balance with currency symbol' ]];

    if(table.rawTable.toString() !== fields.toString()) {
      throw "Error! Check fields beacause have changed after development"
    }

    return poGlobalPosition.assert.business.validate.product.accounts(db.user.products.accounts);

  });

});
