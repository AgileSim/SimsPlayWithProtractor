'use strict';

let BaseAppium = require('./base-appium').config;

let appLocation = process.env.APP_LOCATION ||'./apps/SimsApp.app';

exports.config = Object.assign(BaseAppium, {
    capabilities: {
        'appium-version': '1.6.3',
        browserName: '',
        platformName: 'iOS',
        platformVersion: '10.3',
        deviceName: 'iPhone SE',
        autoWebview: true,
        fullReset: false,
        app: appLocation
    }
});