require("dotenv").config()
const express = require("express")
const { connectToDatabase } = require("./database")

const app = express()
connectToDatabase()

app.use(express.json())


app.get("/home",(req,res)=>{
    res.status(200).json({
        message: "Hello World!!!",
    })
})

app.get("/about",(req,res)=>{
    res.status(200).json({
        message: "This is about page!!!",
    })
})


app.post("/blog",(req,res)=>{
    console.log(req.body)
    res.status(200).json({
        message : "blog api hit successfully...."
    })
})



app.listen(process.env.PORT,()=>{
    console.log("Node.Js project has been started!!!");
})

 