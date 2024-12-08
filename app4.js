const express = require('express');
const app = express();
app.set('port',3000);

app.get('/',(req,res)=>{
    res.status(200).send('<h1>Welcome!</h1>');
});

app.get('/login',(req,res)=>{
    res.status(200).send('<h2>Here is JYJ home.</h2>'); 
});
app.listen(3000);