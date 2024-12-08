const express = require('express');

const app = express();

app.listen(3000,()=>{
    console.log('Server listens on port 3000 !');
})

app.use(function(req, res, next){
    const userAgent = req.header('User-Agent');
    const paramName =req.query.name;
    const paramId = req.query.id;

    res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
    res.write('<h1>Express 서버에서 응답한 결과</h1>');
    res.write(`<div><p>User-Agent: ${userAgent}</p></div>`);
    res.write(`<div><p>Param name: ${paramName}</p></div>`);
    res.write(`<div><p>Param Id: ${paramId}</p></div>`);
    res.end();
})