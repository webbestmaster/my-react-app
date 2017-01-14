#!/usr/bin/env bash

reportsFolder=reports-cover

clear

#cd ./selenium/test/

istanbul cover --root ./dist/ --dir $reportsFolder _mocha ./selenium/test/main-test.js

unamestr=`uname`
reportPath="$reportsFolder/lcov-report/index.html"
if [[ "$unamestr" == 'Darwin' ]]; then # detect MacOS
   open $reportPath
elif [[ "$unamestr" == 'Linux' ]]; then # detect Linux
   xdg-open $reportPath
fi
