const express=require("express")
const router=express.Router();

router.get("/",(req,res)=>{
    res.send("GET:Request");
    res.end();
})

module.exports=router;