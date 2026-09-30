const express = require("express");
const cors = require("cors");
const app = express();


app.use(cors());
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("<h1>Hy I am home page</h1>");
})


app.listen(8080,()=>{
    console.log("Server start");
})