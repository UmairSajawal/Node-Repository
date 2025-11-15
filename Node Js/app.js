var fs = require('fs');
fs.writeFileSync('umair.txt', 'Hello I am Umair');

const data = require('./data.js'); //importing data from data.js
console.log(data);
// console.log(10+10);

// function fruit(item){
//     console.log("I like" + item);
// }
// fruit(" mangoes");

// var a = 2;
// var b = 3;
// console.log(a+b);


// Data.js file code:
/*
export let userName = "Umair Sajawal";
*/

//umair.txt file code:
/*
Hello I am Umair
*/
