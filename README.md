# Frontend Library Starter
[![bitHound Score](https://www.bithound.io/yetu/frontend-library-starter/badges/score.svg?)](https://www.bithound.io/yetu/frontend-library-starter)

A starter for Javascript frontend libraries, targeted for AMD/CommonJS/Standalone consumtion.

## Setup

1. Make sure you have `node` installed and you're running node version 0.10!

    ```
    node --version
    ```

1. Clone the project to your working directory:

    ```
    git clone git@github.com:yetu/frontend-library-starter.git <library_name>
    cd <library_name>
    ```

1. Delete `.git` to cleanup the repository linkage and all unnecessary commits:

    ```
    rm -rf .git
    ```

1. Install all node and bower components:

   ```
   npm install
   bower install
   ```

1. Initialize a new repository:

   ```
   git init
   ```

## Configuring

Before hacking, please, change the values marked by `__GLOBAL_NAME__` and `__LIB_NAME__` tokens inside these files:

```
webpack.config.js
package.json
bower.json
```

Other things are configurable for your taste.

## Run tests

To run a single test use:

```
npm test
```

To run a continous tdd session use:

```
npm run tdd
```

This commands will run `karma` test runner with `jasmine` framework.
After the test run you will get the **test coverage reports** inside the `/coverage` folder!

## Anti-ruining Automated Quality Assurance System

Are you afraid of committing "bad quality" code and ruining everything?
Afraid no more!

This project has a **git hooks integration**, which will run tests and check your javascript **before each commit**.

You are safeguarded against silly mistakes by `jshint` and `fixmyjs`!

You will not be able to commit the code with:

1. Failing tests
2. Bad javascript code style

# Requirements for code

1. All your modules should be AMD modules! (As you are writing code for browser)
2. Your library should have a standalone javascript build file in `/dist` (webpack is handling that automatically)
3. Make attention to *external* dependencies! All those dependencies should be managed by `bower`.

