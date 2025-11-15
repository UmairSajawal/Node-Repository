// Core Modules:
/*
const fs = require('fs');  // For create new file:
const os = require('os');  // For getting OS information:

fs.writeFileSync('dummy.txt', 'This is an example file created using fs module.');  // In terminal, run: node modules.js to create new file

console.log(os.platform());  // Prints the operating system platform//
console.log(os.arch());      // Prints the architecture of the operating system
console.log(os.hostname());  // Prints the hostname of the operating system
console.log(os.cpus());      // Prints the CPU information of the operating system
*/

// Global Objects:
// Note: Global objects are available everywhere in Node.js without the need to require them and import them.
// Example:
console.log("abc");
console.log(process.cwd());  // Prints the current path of the working directory
console.log(process.pid);  // Prints the process ID of the current process


//Note: The difference between core modules and global objects is that core modules need to be imported using require() function before they can be used,
//  whereas global objects are available by default without any import.