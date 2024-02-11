const express  = require('express');
const app = express();

app.listen(3000);

app.get('/' , (req, res)=>{
  console.log(res)
    res.send('happy to ser')
})

app.get('/gadgets',(req,res)=>{
    res.sendFile("./sample.html" , {root:__dirname});
    // res.send('sample')
})