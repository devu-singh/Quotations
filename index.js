const express = require('express');
const port = 2000;
const app =  express();


app.get('/',(req,res)=>{
    return res.send("hello world")
})

// server running 

app.listen(port,(err)=>{
    if(err){
        console.log(`Error, server is not running:${err}`);
        return
    }
    console.log(`server is running successfully:${port}`);
})