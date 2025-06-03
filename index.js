require('dotenv').config()
const express = require('express')
const app  = express();
const port= process.env.PORT;

app.get('/',(req,res)=>{
    res.send('learning backend basics')
})
app.get('/login',(req,res)=>{
    res.send('login page')
    res.send('<h1>this is good </h1>')
})

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})




