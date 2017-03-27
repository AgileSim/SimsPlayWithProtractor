'use strict';

let BaseAppium = require('./base-appium').config;

exports.config = Object.assign(BaseAppium, {
    capabilities: {
        'appium-version': '1.6.3',
        browserName: 'chrome',
        platformName: 'Android',
        platformVersion: '6.0',
        deviceName: 'Android Emulator',
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
        browser.baseUrl = 'http://10.0.3.2:4200/';
    }
});