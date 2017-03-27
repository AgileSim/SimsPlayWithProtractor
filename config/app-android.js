'use strict';

let BaseAppium = require('./base-appium').config;

let appLocation = process.env.APP_LOCATION ||'/Users/jomalopez/Development/projects/AgileSims/SimsApp/cordova/platforms/android/build/outputs/apk/android-debug.apk';

exports.config = Object.assign(BaseAppium, {
    capabilities: {
        'appium-version': '1.6.3',
        browserName: '',
        platformName: 'Android',
        platformVersion: '6.0',
        deviceName: 'Android Emulator',
        autoWebview: true,
        fullReset: false,
        app: appLocation
    }
});