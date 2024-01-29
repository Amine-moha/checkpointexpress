const express=require("express")
const app=express()
const port=8000

const day=new Date().getDay()
const hour=new Date().getHours()
console.log(hour)
const middleware=(req,res,next)=>{
    if (day<1 || day>5 || hour>16 || hour<9){
        res.send("we are closed")
    } else{
        next()
    }
}
app.get("/",middleware,(req,res)=>{
    res.sendFile(__dirname+"/public/home.html")
})
app.get("/contactus",middleware,(req,res)=>{
    res.sendFile(__dirname+"/public/contactus.html")
})
app.get("/service",middleware,(req,res)=>{
    res.sendFile(__dirname+"/public/ourservices.html")
})
app.listen(port,console.log("server is ranning"))

