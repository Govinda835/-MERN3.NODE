const express = require("express")
const app = express()

app.get("/home",(req,res)=>{
    res.json({
        message: "Hello World!!!",
    })
})

app.get("/about",(req,res)=>{
    res.json({
        message: "This is about page!!!",
    })
})

app.get("/about",(req,res)=>{
    res.json({
        message:"This is about page of the server!!!",
    })
})


app.listen(3000,()=>{
    console.log("Node.Js project has been started!!!");
})
