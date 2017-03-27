'use strict';

let Base = require('./base').config;

exports.config = Object.assign(Base, {
    seleniumAddress: 'http://127.0.0.1:4723/wd/hub',
    
    baseUrl: '',

    // configuring wd in onPrepare
    // wdBridge helps to bridge wd driver with other selenium clients
    // See https://github.com/sebv/wd-bridge/blob/master/README.md
    onPrepare: function () {
        var wd = require('wd'),
            protractor = require('protractor'),
            wdBridge = require('wd-bridge')(protractor, wd);

        wdBridge.initFromProtractor(exports.config);

        //To navigate using file:// rather than http://
        var defer = protractor.promise.defer();

        browser.ignoreSynchronization = false;

        browser.executeScript('return window.location;').then( function(location){
            browser.resetUrl = 'file://';
            browser.baseUrl = (location.origin + location.pathname).replace('login', 'index.html');
            console.log('browser.baseUrl:' + browser.baseUrl)
            defer.fulfill();
        });

        return defer.promise;
    }
});