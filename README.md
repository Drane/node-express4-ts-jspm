DONE:
=====
1. setup:
    - jspm install npm:jasmine-node --save-dev
    - server.ts en serverSpec.ts
    - tsd install jasmine --save
    - Will ignore System.js for now... not easy:
        - see https://github.com/systemjs/systemjs/issues/245
    - tsd install node --save
    - clear && ./jspm_packages/npm/jasmine-node@2.0.0/bin/jasmine-node
    - npm install jasmine-node -g
    - in package.json "scripts": { "test": "jasmine-node src/test/" }
    - jspm install npm:request --save-dev
    - npm install request --save-dev

TODO:
=====
1. setup:
    - Use System.js
    - continue 
        - https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-jasmine
        - https://github.com/czechboy0/Express-4x-Typescript-Sample
    - angular2 karma (see examples) https://www.npmjs.com/package/karma-systemjs
    