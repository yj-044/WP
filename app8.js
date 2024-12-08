const express = require('express');
const path = require('path');
const app = express();
const static = require('serve-static');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    const paramID = req.body.id || req.query.id;
    const paramPassWd = req.body.password || req.query.password;

    res.status(200).send(
        `<h1>서버에서 응답한 결과</h1>
        <div><p>Parm id: ${paramID}</p></div>
        <div><p>Parm passwd: ${paramPassWd}</p></div>
        <br><br><a href="/login1.html">로그인 페이지로 돌아가기</a>`
    );

    next();
});

app.listen(3000, () => {
    console.log('Server listens on port 3000!');
});
