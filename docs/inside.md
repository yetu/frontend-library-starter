## What's inside that stuff?

So, we have packed some real magic inside...

* [6to5][13] transpiles ES6 code into ES5 code.
    You write your code using new ES6 syntax!
* All major and new module formats are supported: [AMD][14], [CommonJS][15], [ES6 Modules](http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts#august_24_2014_draft_rev_27)
    Almost anyone can use your library in browser and NodeJS!
* [Webpack][1], [RequireJS][20], [Browserify][21], [SystemJS][22] compatible!
    You should not worry how your module will be bundle
* Can be used in a browser directly: [Webpack][1] build configured to produce a [standalone][2] [UMD][3] version in `dist/standalone.js`
    We got those oldschool guys covered as well.
* [Karma][4] + [Jasmine][5] test setup (with CI integration for PhantomJS and Firefox!)
    You can be sure that your code works as intended.
* Coverage report generated via [istanbul][6]
    If you like numbers, we have added some stuff.
* [npm](https://www.npmjs.com/), [jspm][17] and [bower][18] support
    So that your library can be easily distributed.
* [Pre-commit hook][9] with [jshint][7] and [fixmyjs][8]
    You cannot commit bad code and break all things.
* Out-of-box integration with [travis][11], [coveralls][12] and [bithound][19]
    Everything is automated! Get those cool badges!




  [1]:http://webpack.github.io/
  [2]:http://webpack.github.io/docs/configuration.html#output-librarytarget
  [3]:https://github.com/umdjs/umd
  [4]:http://karma-runner.github.io/0.12/index.html
  [5]:http://jasmine.github.io/2.1/introduction.html
  [6]:http://gotwarlost.github.io/istanbul/
  [7]:http://jshint.com/about/
  [8]:https://github.com/jshint/fixmyjs
  [9]:https://github.com/typicode/husky
  [10]:https://hub.github.com
  [11]:https://travis-ci.org
  [12]:https://coveralls.io
  [13]:https://6to5.org/
  [14]:https://github.com/amdjs/amdjs-api/wiki/AMD
  [15]:http://wiki.commonjs.org/wiki/Modules/1.1
  [16]:https://www.npmjs.com/
  [17]:http://jspm.io/
  [18]:http://bower.io/
  [19]:https://www.bithound.io/
  [20]:http://requirejs.org/
  [21]:http://browserify.org/
  [22]:https://github.com/systemjs/systemjs