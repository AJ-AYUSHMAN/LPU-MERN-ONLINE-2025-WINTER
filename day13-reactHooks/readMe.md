## MAKE .gitignore file
and add "node_modules" into it

----------------------------------------------------------------------------

## STEPS to make our own REACT APP from SCRATCH

### 1. initialize node package :: BIRTH CERTIFICATE
--> npm init

### 2. Install the required dependencies :: npmjs (website) (like a playstore or appstore for us)
https://www.npmjs.com/
Search for all the dependencies you need in project and install them as said in documentation
For us currently it is : 
--> npm i react
--> npm i react-dom

:: Reflecting on what has changed:
1. package.json       ::  it has added a "dependencies" to track what (direct) dependencies we are using
2. package-lock.json  ::  track all the dependencies (direct + transitive)
3. node_modules       ::  it stores the downloaded code of all the dependencies that are required for your project

### 3. Make a index.html file as starting point to your web application
### Make css and js file as well
write some basic code into it, and attach css and js files

----------- can i use react in my code now?? ------------------------

###  we use import statement to import the required code from node modules
1. import React from "react" 

// --> error says: cannot use import outside module
// you need to make your js code as a module

2. go to package.json and write 
--> "type": "module",
3. mention this attribute on script tah
--> type="module"

// still we are getting errors because, react code itself is in multiple files
// I cannot keep on sending all these files on by one from server to client

### We need a bundler to do this for us (webpack, vite, parcel)
### We will use parcel because it is less headache to configure
4. Install bundler :: parcel and set it up
--> npm i parcel

5. RUN YOUR APP
--> npx parcel index.html

(DO NOT USE LIVE SERVER to open the react app)



