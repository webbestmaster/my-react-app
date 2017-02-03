# Currency Reference

## Installation

At first install libraries for nodeJs canvas (need for test only)

> Ubuntu: sudo apt-get install libcairo2-dev libjpeg8-dev libpango1.0-dev libgif-dev build-essential g++

> OS X: brew install pkg-config cairo libpng jpeg giflib

npm

> npm i

## Run developer server

> npm start

Above command run webpack-dev-server with host is 0.0.0.0 (your ip address) and port - :8080

## Build

> npm run build

## BackstopJS
>$ sudo npm install -g backstopjs

### How to...

Create/rewrite ALL images.
>$ sudo backstop reference --configPath=backstop.config.js

Set backstop with other config.
>$ sudo backstop reference --configPath=local_backstop.json

If you don't want BackstopJS do first delete all files in your reference directory you can enable the incremental (--i) flag.
>$ sudo backstop reference --i --configPath=backstop.config.js

If you need to update references (or test) for just one scenario you can do so by invoking BackstopJS with the --filter argument...
>$ sudo backstop reference --filter=<scenario.label>

Run test.
>$ sudo backstop test --configPath=backstop.config.js

See in to "backstop reference --filter=<scenario.label>".
>$ sudo backstop test --filter=<scenario.label>

## Selenium

Install
>$ sudo npm install -g mocha mochawesome

Run selenium server standalone:
>$ java -jar selenium-server-standalone-3.0.1.jar

Run test
>$ mocha ./\<path\>/\<to\>/\<test\>.js


// TODO: доделать!!!
добавить истанбул



