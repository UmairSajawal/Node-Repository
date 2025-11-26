// ******* Modules and Routes | how to make custom modules in node js ******

// root.js file code

const http = require('http');
const userForm = require('./UserForm')
const userDataSubmit = require('./UserDataSubmit')

http.createServer((req, resp) => {
    resp.writeHead(200, {'Content-Type': 'text/html'});
    if(req.url == "/"){
        userForm(req, resp);
    } else if(req.url == "/submit"){
        userDataSubmit(req, resp);
    }
    resp.end();
}).listen(2700)


// UserForm.js file code;
/*
function userForm(req, resp) {
    resp.write(`
        <form action="/submit" method="post">
            <input type="text" name="name" placeholder="Enter Username" />
            <br /> 
            <input type="email" name="email" placeholder="Enter Email" /><br />
            <input type="submit" value="Submit" />
        </form>`);
}
module.exports = userForm;
*/


// UserDataSubmit.js file code;
/*
// Converts the raw data into readable format
const querystring = require('querystring');

function userForm(req, resp) {
    // Get form data output in Node Js Terminal
        let dataBody = [];
            req.on('data', (chunk) => {
                dataBody.push(chunk);
            })
    
            req.on('end', () => {
                let rawData = Buffer.concat(dataBody).toString();
                // Converts the raw data into readable format
                let readableData = querystring.parse(rawData)
                //console.log(readableData);
                let dataString = " My name is " + readableData.name + " and my email is " + readableData.email;
                console.log(dataString);
            })

    resp.write("<h1>You can get data from User Form here</h1>");
}

module.exports = userForm;
*/