const express = require("express");
const cors = require("cors");
const app = express();


app.use(cors());
app.use(express.json());


app.get("/todo",(req,res)=>{
    res.json([
        { task1 : "Play cricket" },
        { task2 : "Play xyz" }
    ]);
})


app.listen(8080,()=>{
    console.log("Server start");
})