const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('첫번째 미들웨어에서의 요청 처리');
    res.send({name:'JYJ', age:21});
})

app.listen(3000, () => {
    console.log('Server listens on port 3000!');
});