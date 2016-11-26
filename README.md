# typescript-unittest-demo
A simple project to unit test typescript using jasmine. This project would help to getting started with setting up the unit test cases for typescript files.

Below are simple steps to get started. The set up can be done with just typescript and jasmine, however, we have used node and gulp to make it easier and maintainable as more files are added.

## Conventions followed:
    1. Keep source typescript files in src folder
    2. Keep unit test cases spec files in tests folder
    3. npm commands are executed in command prompt set with directory root
    4. It is assumed that Node and TypeScript is already installed

## Intializing project:
   Execute following to initialize package.json: `npm init`    
   Write simple function - Say Hello World in Hello.ts

## Compiling typescript files:
    1. Add tsconfig.json file - configuration file for typescript
    2. Add gulp task to transpile typescript to javascript as below:
        a. `npm install --save-dev typescript gulp gulp-typescript`
        b. Add gulpfile.js and gulp taks to compile ts files. Watch task can be added to automatically compile ts files when changed
        
## Setting up Jasmine for unit test cases:
    1. `npm install --save-dev jasmine-core`
    2. Get jasmine typings for intellisense support: `npm install @types/jasmine`
    3. Import module in source test file and write sample test for it using jasmine spec.

## Executing test cases
    1. Execute command: `gulp` or `gulp watch` - to compile ts files
    2. Run tests: `jasmine tests/*.spec.js`. This statement can be added in package.json and test cases can be run with `npm test`. Refer test under scripts in package.json. 
    
## Conclusion
 We have set up to start writing unit test cases in typescript. Even if it seems that many steps are required, it is very simple.
 
## Further path 
The test cases would run in console. If we want to run in SpecRunner.html, one more step is required to bundle the modules so that they can be run in browser. e.g. Consume the source file module in test spec. The bundling can be done using [Browserify](http://browserify.org/), [WebPack](https://webpack.github.io/) or any of your favourite module bundler.

## References
The typescript [documentation](https://www.typescriptlang.org/docs/handbook/gulp.html) helped the lot in setting up this project.
