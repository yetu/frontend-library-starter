## Automate routine tasks

Ok, so you have decided to do things productive...
Wise choice.


### Prerequisites


1. Ensure that NodeJS is installed.  
    You need it to use the integrated build and test tools.  
    **Note**: Please, use node version 0.10 for now.

1. Install [loom](https://www.npmjs.com/package/loom).  
    This is a generator, you will initialize new projects with it.

    ```
    npm install -g loom
    ```

1. Install [hub](https://hub.github.com/).  
    You will need it to work with github from CLI.

1. Install [mversion](https://www.npmjs.com/package/mversion).  
    You will update those versions in `bower.json` and `package.json` with that tool.

    ```
    npm install mversion
    ```

### Starting new project

So, you want to create `my-lib` library.  
You need to run these commands:

```bash
originate frontend-lib my-lib __my-lib-global-name
cd my-lib
git init
npm install

```

**Note**: `originate` utility is a part of `loom` installation.  
`frontend-lib` is a template for libraries, you can find it [here](https://github.com/mr-mig/originate-frontend-lib).

**Note**: `__my-lib-global-name` is an optional parameter.  
It defaults to your library name prefixed with `_` character.  
It is a global name used in `standalone` build to register your library in browsers `window` object.

Now you can automagically push the initial version of your library to github:

```bash
npm run build-all && npm run test
git add . && git commit -am "Initial commit"
hub create
git push origin master
```

This set of commands will create `my-lib` repo under your github account!

### Testing things


We have included testing in `Chrome`, `Firefox`, `PhantomJS` and `Safari` by default.  
You can turn some of those browsers off in `karma.conf.js`

To run a single test use:

```
npm test
```

To run a continuous tdd session use:

```
npm run tdd
```

This commands will run `karma` test runner with `jasmine` framework.  
After the test run you will get **test coverage reports** inside the `/coverage` folder!




### Building dists


To build the AMD/CommonJS/UMD/SystemJS versions of your library for other people just run:

`npm run build-all`

Also, we have added some special magic to make sure you do not commit your code without adding built files :)



### Automated control


Are you afraid of committing "bad quality" code and ruining everything?
Afraid no more!

This project has a **git hooks integration**, which will run tests and check your javascript **before each commit**.

You are safeguarded against silly mistakes by `jshint` and `fixmyjs`!

You will not be able to commit the code with:

1. Failing tests
2. Bad javascript code style

**Node**: In case you very urgently need to overcome the protection and break everything, you can issue this command: `git commit --no-verify `


### Publishing the code



So, you have crafted some nitty-gritty goodness?

Now it's time to publish the thing!

1. Update the version, e.g.:
    ```
    mversion patch -m
    ```

    Mversion will update the version according to [semver spec](http://semver.org/) and add git tag automatically!


1. Push it!

    ```
    git push --tags
    ```

1. [Optional] Publish the npm package

    ```
    npm publish
    ```

1. [Optional] Publish the bower package

    ```
    bower register <my-lib-name> <my-git-endpoint>
    ```

## Continuous Integration

You may want to add your github repo to [travis](travis-ci.org) and [coveralls](coveralls.org/).
