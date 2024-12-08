const http = require('http');
const fs = require('fs');
const server = http.createServer();

server.on('request', (req,res) => {
    const filename = 'week2.html';
    fs.readFile(filename, (err,data) => {
        res.writeHead(200,{'Content-Type':'text/html'});
        if (err != null) {
            console.log("Error\n");
            res.write('<h1>Error</h1>');
        }
        res.write(data);
        res.end();
    });
});

server.listen(3000, () => {
    console.log('Server listens on port 3000 !');
});