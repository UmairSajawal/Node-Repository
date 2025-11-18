// ******* Understand Server Response in Node Js ********


const http = require("http");

const age = 23;

const server = http.createServer(
    (req, resp)=> {
        // Note: setHeader to inform browser about content type like text/html means HTML content
        // because by default it is text/plain
        resp.setHeader("Content-Type", "text/html");  
        resp.write(`
            <html>
                <head>
                    <title>My First Page</title>
                </head>
                <body>
                    <h1>Hi I am Umair Sajawal</h1>
                    <h2>`+age+`</h2>
                    <h2>`+new Date()+`</h2>
                </body>
            </html>`);
        resp.end();  // Note: .end() is important to end the response
        // process.exit(); // to stop server after one response
    }
)

server.listen(4600)