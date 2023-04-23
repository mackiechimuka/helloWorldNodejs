const express = require('express');
const app = express();

app.use("/",(req,res ,next)=>{
    res.send("Hello World");
})

const port = process.env.Port || 8080 
app.listen(port,()=>{
   console.log(`Running on localhost:${port}`)
})