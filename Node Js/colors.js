// Note: First visit website: https://www.npmjs.com/package/color
// Copy command: 'npm i color' and run it in terminal same as it is
// Then run command: node color.js
// You can install package.json by running command: npm init 
// Now again run  or install: 'npm i color' in terminal
// when you install all packages in another pc run command: npm i

// Note : node modules not uploaded to github because it contains all packages so it will increase size of repo
// so we use package.json to store all packages name and version
// so when we run command 'npm i' it will install all packages mentioned in package.json

const colors = require('colors');
console.log("This is default color text");
console.log(colors.red("This is red color text"));
console.log(colors.green("This is green color text"));
console.log(colors.yellow("This is yellow color text"));




// Package.json file code:
/*
{
    "name": "node-js",
    "version": "1.0.0",
    "description": "",
    "license": "ISC",
    "author": "Umair Sajawal",
    "type": "commonjs",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node server.js"
    },
    "dependencies": {
        "color": "^5.0.3"
    }
}

*/