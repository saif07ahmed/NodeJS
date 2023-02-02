const express=require("express");
const cors=require("cors");
const app=express();
app.use(cors());
app.get("/",async(req,res)=>{
    const data=await fetch(`https://randomuser.me/api/?page=${req.query.page}&results=${req.query.results}&seed=abc`);
    const dataa=await data.json();
    //console.log(dataa);
    res.json(dataa);
});

app.listen(700);
