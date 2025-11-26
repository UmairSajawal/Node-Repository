
// ****** Synchronous vs Asynchronous JavaScript ******
// Javascript Synchronous and Asynchronous programming same as for Node Js

//         *** Synchronous JavaScript ***
// By default, JavaScript is synchronous.
// Code is executed line by line, blocking further execution until the current operation completes.
// Synchronous operations can lead to performance issues, especially with long-running tasks.
// Like if three operation run, it completes one operation first then moves to the next operation.
// Example of synchronous code:
/*
    console.log("apple1");
    console.log("apple2");
    console.log("apple3");
*/
// Example with Node.js file system module (fs) to read a file Synchronously using readFileSync:
/*
    const fs = require('fs');
    const data = fs.readFileSync('text/Arib.txt', 'utf-8')
        console.log(data);
    console.log('End Script...');
*/



//          *** Asynchronous JavaScript ***
// We can make JavaScript asynchronous using callbacks, promises, or async/await.
// Code can be executed without blocking the main thread, allowing other operations to run concurrently.
// Asynchronous operations improve performance and responsiveness, especially in I/O-bound tasks.
// Like if three operation run, it starts all operations at once and completes them as they finish.
// More preferable in most cases.
// Example of asynchronous code using setTimeout:
/*
    console.log('apple1');
    setTimeout(() => {
        console.log('apple2');
    }, 2000);
    console.log('apple3');

    // Promises, ...

*/

// Example with Node.js file system module (fs) to read a file asynchronously
/*
    const fs = require('fs');
    fs.readFile('text/Arib.txt', 'utf-8', (err, data) =>{
        if(err){
            return false;
        }
        console.log(data);
    });
    console.log('End Script...');
*/