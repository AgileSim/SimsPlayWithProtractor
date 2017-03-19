'use strict';

exports.config = {
    // seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    seleniumPort: 4444,
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    framework: 'custom',
    // path relative to then current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        'browserName': 'chrome'
    },


    // Spec patterns are relative to this directory.
    specs: [
        '../features/'
    ],

    baseURL: 'http://localhost:4200/',

    cucumberOpts: {
        require: ['../features/step_definitions', '../features/support'],
        tags: false,
        format: 'pretty',
        profile: false,
        'no-source': true
    }
};