'use strict';

let BaseAppium = require('./base-appium').config;

exports.config = Object.assign(BaseAppium, {
    capabilities: {
        'appium-version': '1.6.3',
        browserName: 'safari',
        platformName: 'iOS',
        platformVersion: '10.2',
        deviceName: 'iPhone 7',
        fullReset: false,
    },

    // configuring wd in onPrepare
    // wdBridge helps to bridge wd driver with other selenium clients
    // See https://github.com/sebv/wd-bridge/blob/master/README.md
    onPrepare: function () {
        var wd = require('wd'),
            protractor = require('protractor'),
            wdBridge = require('wd-bridge')(protractor, wd);

        browser.ignoreSynchronization = false;
        browser.baseUrl = 'http://localhost:4200/';
    }
});