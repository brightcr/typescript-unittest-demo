# typescript-unittest-demo
A simple project to unit test typescript using jasmine. This project would help to getting started with setting up the unit test cases for typescript files.

1. Convention followed - Keep source typescript files in src folder
2. Convention followed - Keep unit test cases spec files in tests folder
3. Execute following to initialize package.json: npm init
4. Write simple function - Say Hello World in Hello.ts
5. Create tsconfig.json file - configuration file for typescript
6. create gulp task to transpile typescript to javascript:
    a. npm install --save-dev typescript gulp gulp-typescript
    b. Create gulpfile.js to watch and compile ts files
7. Jasmine: set up Jasmine
    a. npm install --save-dev jasmine-core
    b. Get jasmine typings for intellisense support: npm install @types/jasmine    
8. Import module in source test file and write sample test for it using jasmine spec.
9. Execute command: gulp or gulp watch - to transpile ts files
10. Run tests: jasmine tests/*.spec.js. This statement can be added in package.json and test cases can be run with npm test

