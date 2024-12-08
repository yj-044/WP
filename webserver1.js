const http = require('http');
const { wrap } = require('module');

const server = http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type':'text/html'}); // 'text/plain'으로도 작동시켜 보기
    res.write("<h1>Hello World!</h1>");
    res.end('<h1>Hello World!</h1>');
});

server.listen(1000, () => {
    console.log('Server listens on port 1000 !');
});