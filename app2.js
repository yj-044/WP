const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
    res.end('<h1>Express Server에서 응답한 결과</h1>');
})

app.listen(3000, () => {
    console.log('Server listens on port 3000!');
});