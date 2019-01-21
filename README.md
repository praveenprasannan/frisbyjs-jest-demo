# frisbyjs-jest-demo

![alt text](https://www.frisbyjs.com/assets/frisbyjs.png)

API testing using Frisby.js - _One of the easiest REST API Testing Framework._

Frisby.js uses Jasmine style assertion syntax, and uses [Jest](https://jestjs.io/) to run tests. I have used jest-stare to generate the test results.

### Environment Setup

#### 1. Global Dependencies
  * Install [Node.js](https://nodejs.org/en/) by typing,
  ```
  $ brew install node
  ```
  * Install [Yarn](https://yarnpkg.com/lang/en/docs/install/) by typing,
  ```
  $ brew install yarn
  ```

#### 2. Project Dependencies

* Install Node modules by typing,
```
$ yarn install
```

### Running Tests

* To run tests, type
```
$ yarn jest
```
* To generate test report, type
```
$ yarn jest --reporters jest-stare
```
This is configired in `package.json`

### Docs & further reading

* https://www.frisbyjs.com/
* https://jestjs.io/
* https://www.npmjs.com/package/jest-stare