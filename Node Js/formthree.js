// ***** How to Submit Form with Node.js *****
// with html file
// Create File with Requested Form Data
// Create File With Both Synced and Async Way with data
// First Create a folder named 'text' in the root directory or any you want to save files in it
// for Sync file creation write : fs.writeFileSync("PATH/FILE_NAME.EXT","DATA")
// for Async file creation write : fs.writeFile("PATH/FILE_NAME.EXT","DATA","Type of data" ,CALLBACK_FUNCTION)


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
        } else if (req.url === "/submit") {
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

                // File created with Synced Way
                // fs.writeFileSync("text/"+readableData.name+".txt", dataString);
                // console.log("File Created Successfully");

                // File created with Async Way
                fs.writeFile("text/"+readableData.name+".txt", dataString, 'utf-8', (err) => {
                    if(err){
                        console.log("Error in file creation");
                        return false
                    }
                    else{
                        console.log("File Created Successfully");
                    }
                })

            })
            
            resp.write("<h1>Form Submitted Successfully</h1>");
        }
        resp.end();
    })
}).listen(3300)











