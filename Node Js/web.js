// **** Send HTML File in Response using FS Module ****
// html file run in node cmd: node web.js
// html file run through Node Js Server 

const http = require('http');
const fs = require('fs')

http.createServer((req, resp) => [
    fs.readFile('html/web.html', "utf-8", (err, data) => {
        if(err) {
            resp.writeHead(500, {'Content-Type' : 'text/plain'})
            resp.write('500 - Internal Server Error')
            resp.end();
        }
        resp.writeHead(200, {'Context-Type' : 'text/html'})
        resp.write(data)
        resp.end();
    })
]).listen(2300)