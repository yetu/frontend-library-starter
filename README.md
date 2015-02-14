# Frontend Library Starter
[![bitHound Score](https://www.bithound.io/yetu/frontend-library-starter/badges/score.svg?)](https://www.bithound.io/yetu/frontend-library-starter)
[![Build Status](https://travis-ci.org/yetu/frontend-library-starter.svg?branch=master)](https://travis-ci.org/yetu/frontend-library-starter)
[![Coverage Status](https://coveralls.io/repos/yetu/frontend-library-starter/badge.svg)](https://coveralls.io/r/yetu/frontend-library-starter)

A starter for Javascript frontend libraries with isomorphic packaging.

## What is that for?

So, imagine you are a frontend developer.

And you want to write a javascript library, that other people will use in their projects.

You want to make your library hugely reusable, maintainable and future-proof.
But at the same time you obviously want to use the latest and coolest technologies:

 * ES6 features
 * Unit tests
 * Integration with some CI
 * Measuring test coverage (just in case they ask)
 * Code quality checks

And you do not want to force other developers to **rewrite** or **reconfigure** their projects.
So you will need to support these tools:

* RequireJS
* Webpack
* Browserify
* SystemJS
* npm
* bower
* jspm

... and make the library useful for isomorphic apps (those written for both NodeJS and browser)...
... and let those people who love global variables to use your library...

**Sounds too complex?**

### Fear no more!

That's why we have created this library!

It will allow you to build bulletproof frontend libraries, which can be used with all latest technologies (ES6, jspm, systemjs) and some older ones (CommonJS, AMD, UMD, npm, bower, ...).

Here is some docs to proceed:

* [I want to know what cool things are inside!](./docs/inside.md)
* [How do I start with that stuff?](./docs/start.md)
* [How can I contribute?](./CONTRIBUTING.md)