'use strict';

let self = {

    current: undefined,
    back: undefined,
    history: [],

    setCurrent: function (current) {
      self.history.push(self.current);
      self.back = self.current;
      self.current = current;
    }

}

module.exports = self;