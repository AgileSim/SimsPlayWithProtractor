'use strict';

let BaseAppium = require('./base-appium').config;

let appLocation = process.env.APP_LOCATION ||'/Users/jomalopez/Development/projects/AgileSims/SimsApp/cordova/platforms/ios/build/emulator/SimsApp.app';

exports.config = Object.assign(BaseAppium, {
    capabilities: {
        'appium-version': '1.6.3',
        browserName: '',
        platformName: 'iOS',
        platformVersion: '10.2',
        deviceName: 'iPhone 7',
        autoWebview: true,
        fullReset: false,
        app: appLocation
    }
});