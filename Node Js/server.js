// Create server in Node Js

// Note: To run this file use command: node server.js
// After running the command open browser and type: localhost:4800 
// You will see the output in browser
// to stop the server go to terminal and press: Ctrl + C

const http = require("http");
http.createServer((req, resp)=>{
    resp.write("<h1>Hi I am Umair Sajawal</h1>");
resp.end("Hello Umair"); // written .end() is important to end the response
}).listen(4800);


