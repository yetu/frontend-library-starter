## Doing everything manually

Ok, so you have decided to do things manually...
Wise choice.


### Prerequisites

Ensure that NodeJS is installed.
You need it to use the integrated build and test tools.

**Note**: Please, use node version 0.10 for now.

Also, you will need git :)





### Starting new project

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
    ```

1. Initialize a new repository:

    ```
    git init
    ```

1. Before hacking, please, change the values marked by `__GLOBAL_NAME__` and `__LIB_NAME__` tokens inside these files:

    ```
    webpack.config.js
    package.json
    bower.json
    ```

   Other things are configurable for your taste.






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

1. Update the versions in `package.json` and `bower.json`, so that they match each other and adhere to [semver specification](http://semver.org/)
1. Commit all your files, including those inside `/dist` folder

    ```
    git add .
    git commit -m "Added my supercool library"
    ```

1. Add a git tag matching the version, e.g. `v1.0.1`

    ```
    git tag v1.0.1
    ```

1. Push it!

    ```
    git push && git push --tags
    ```

1. [Optional] Publish the npm package

    ```
    npm publish
    ```

1. [Optional] Publish the bower package

    ```
    bower register <my-lib-name> <my-git-endpoint>
    ```


### Pimp my workflow

Have you seen the [automated workflow suggestion](automate-routine.md)?