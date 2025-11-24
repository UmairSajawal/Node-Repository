// ***** How to Submit Form with Node.js *****
// with html file

const http = require('http');
const fs = require('fs');
// Converts the raw data into readable format
const querystring = require('querystring');

http.createServer((req, resp) => {
    fs.readFile("html/form.html", "utf-8", (err, data) => {
        if (err) {
            resp.writeHead(500, { 'Content-Type': 'text/plain' })
            resp.end("Internal Server Error");
            return;
        }
        resp.writeHead(200, { 'Content-Type': 'text/html' })
        if (req.url == '/') {
            resp.write(data);
        } else if (req.url == "/submit") {
            // Get form data output in Node Js Terminal
            let dataBody = [];
            req.on('data', (chunk) => {
                dataBody.push(chunk);
            })

            req.on('end', () => {
                const rawData = Buffer.concat(dataBody).toString();
                // Converts the raw data into readable format
                const readableData = querystring.parse(rawData)
                console.log(readableData);
                resp.write(`
                    <h1>Form Submitted Successfully</h1>
                    <p>Name:${readableData.name}</p>
                    <p>Email: ${readableData.email}</p>
                    `);

                

                resp.end();
            });
            
        }
        
    })
}).listen(3100)











