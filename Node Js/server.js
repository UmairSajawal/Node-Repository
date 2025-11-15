// Create server in Node Js

const http = require('http');
http.createServer((req, resp)=>{
    resp.write("<h1>Hi I am Umair Sajawal</h1>");
    resp.end("Hello World"); // written .end() is important to end the response
}).listen(4800);