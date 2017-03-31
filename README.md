# SimsPlayWithProtractor
Behaviour testing demo for Agile Sims project, to show an example of working with Protractor and Cucumber.

## Protractor installation and selenium webdriver configuration

> npm install

Npm install will install all dependencies for selenium and protractor. After

## Usage

> npm test -- --baseUrl=\<web aplication URL\>

Example: 

> npm test -- --baseUrl=http://localhost:4200

## Run in emulators and devices (iOS and Android)

### Prerequisites

- The same that [SimsApp project](https://github.com/AgileSim/SimsApp/blob/master/cordova/README.md)
- Execute: ```sudo ./node_modules/.bin/authorize-ios```

Check prerequisites executing:

> ./node_modules/.bin/appium-doctor

### Usage

1. Run the appium server (Note: this steps it's not already necessary because of appium's server is started with the run-tests.sh script)

> ./node_modules/.bin/appium

Note: sometimes, if the version of chrome is lower in the device (chrome o webview) that the used by appium it throws an error such as: *[Chromedriver] Error: unknown error: Chrome version must be >= 53.0.2785.0*. In this cases you need download a correct version from https://chromedriver.storage.googleapis.com/index.html and execute:

> ./node_modules/.bin/appium --chromedriver-executable ./chromedriver

2. Update capabilities (for instance, *platformVersion* and *deviceName*) for the devices under tests and, optional if you want test native apps, update the path to app and/or apk files.

3. Execute some of these commands:

```bash
# Run tests over safari browser into iOS device
npm test -- web-ios

# Run tests over chrome browser into Android device
npm test -- web-android

# Run tests over app into iOS device
npm test -- app-ios

# Run tests over app into Android device
npm test -- app-android
```