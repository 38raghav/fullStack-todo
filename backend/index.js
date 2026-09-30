const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>Hy I am home page</h1>");
})

app.listen(8080,()=>{
    console.log("Server start");
})