const express=require("express");
const cors=require("cors");
const app=express();
app.use(cors());
app.get("/",async(req,res)=>{
    let url=`https://stage-api.homluv.com/api/nlc/` ;
    let url2=`/?pagesize=${req.query.pagesize}&page=${req.query.page}`
    if(req.query.category){
        url+=`category`
        url+=url2;
        url+=`&category=${req.query.category}`;
    }
    else{
        url+=`articles`;
        url+=url2;
    }
    if(req.query.search){
            url += `&search=${req.query.search}`;
    }
    console.log(url);
    const data=await fetch(url);
    const dataa=await data.json();
    console.log(dataa.length);
    res.json(dataa);
});
app.listen(700);