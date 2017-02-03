#!/usr/bin/env bash

clear

cd ./selenium/test

now="$(date +'%Y-%m-%d-%H-%M-%S')"
reportsFolder=./reports
reportName=auto-test-$now

#mocha example.js --reporter mochawesome --reporter-options reportDir=$reportsFolder,reportFilename=$reportName,reportTitle="Auto Test $now",inlineAssets=false
mocha ./index.js --reporter mochawesome --reporter-options reportDir=$reportsFolder,reportFilename=$reportName,reportTitle="Auto Test $now",inlineAssets=false

unamestr=`uname`
reportPath="$reportsFolder/$reportName.html"
if [[ "$unamestr" == 'Darwin' ]]; then # detect MacOS
   open $reportPath
elif [[ "$unamestr" == 'Linux' ]]; then # detect Linux
   xdg-open $reportPath
fi
