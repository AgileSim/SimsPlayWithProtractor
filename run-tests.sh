#!/bin/bash

if [ "$1" != "" ]; then
    rm ./nohup.out
    ps -ef | grep appium | grep -v grep | awk '{print $2}' | xargs kill
    nohup ./node_modules/.bin/appium &
    sleep 5 && node_modules/protractor/bin/protractor config/$1
else
    node_modules/protractor/bin/protractor config/base
fi