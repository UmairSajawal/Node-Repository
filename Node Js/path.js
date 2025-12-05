// ****** Path Modules ******

const path = require('path');
const file = 'text/jameel.txt';

// console.log(path.extname(file)); // output: .txt
// console.log(path.dirname(file)); // output: txt
// console.log(path.basename(file)); // output: jameel.txt
// console.log(path.isAbsolute(file)); // output: false

// Global Constants:
console.log(__dirname);  // output: current directory path: C:\Users\UMAIR\Desktop\Node Js
console.log(__filename); // output: current file path: C:\Users\UMAIR\Desktop\Node Js\path.js