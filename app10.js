const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const static = require('serve-static');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/', static(path.join(__dirname, 'public')));

const router = express.Router();
const jrt_handler = (req,res,next) => {
    console.log('/process/login/:name 처리');

    const paramName = req.params.name;
    const paramId = req.body.id || req.query.id;
    const paramPassword = req.body.password || req.query.password;

    res.status(200).send(
        `<h1>서버에서 응답한 결과</h1>
        <div><p>Param id : ${paramId}</p></div>
        <div><p>Param password: ${paramPassword}</p></div>
        <div><br><a href="/login1.html">로그인 페이지로 돌아가기</div>`
)};
router.route('/process/login/:name').post(jrt_handler);

router.route('/process/login/:name').get(jrt_handler);
app.use('/', router);

app.listen(3000, () => {
    console.log('Server listens on port 3000!');
});