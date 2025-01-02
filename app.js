require("dotenv").config()
const express = require("express")
const { connectToDatabase } = require("./database")

const app = express()


connectToDatabase()

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


app.listen(process.env.PORT,()=>{
    console.log("Node.Js project has been started!!!");
})

 // password: helloworld
//mongodb+srv://govinda835:<db_password>@cluster0.czl5j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


