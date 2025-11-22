const http = require('http');

const arg = process.argv;
const port = arg[2];

http.createServer((req, resp) => {
    resp.write("Input from cmd");
    resp.end();
}).listen(port);
// Note: to run this file use command: node command-line-input.js  5000    // 5000 is port number, you can change it to any number


// **** Example for arg[0,1,2...] ****
// this is output on command line
// 1: node path
// 2: file path
// 3: first input from cmd
// 4: second input from cmd
/*

node command-line-input umair sajawal
[
    'C:\\Program Files\\nodejs\\node.exe',
    'C:\\Users\\UMAIR\\Desktop\\Node Js\\command-line-input',
    'umair',
    'sajawal'
]

*/