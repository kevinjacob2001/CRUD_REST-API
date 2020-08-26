const express=require("express");
const mongoose=require("mongoose")
const url="mongodb://localhost/AlienDBex"

const app=express();




mongoose.connect(url,{useNewUrlParser:true})
const con=mongoose.connection

const alienRouter=require("./routes/aliens");
app.use("/aliens",alienRouter);


con.on("open",()=>{
    console.log("Connected...")
})

app.listen(9000,()=>{
    console.log("Server started listening at port:9000")
})