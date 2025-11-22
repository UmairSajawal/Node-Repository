const http = require('http');

const userData = [
    { 
        name: 'Alice', 
        age: 30,
        email: 'alice@gmail.com' 
    },
    {  
        name: 'Bob', 
        age: 25, 
        email: 'bob@gamil.com' 
    },
    { 
        name: 'Charlie', 
        age: 35, 
        email: 'charlie@gmail.com' 
    }
]
http.createServer((req, resp) => {
    resp.setHeader('Content-Type', 'application/json');
    resp.write(JSON.stringify(userData))
    resp.end();
}).listen(6001);
