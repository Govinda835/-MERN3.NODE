require("dotenv").config()
const express = require("express")
const { connectToDatabase } = require("./database")
const { Blog } = require("./model/blogModel")

const app = express()
connectToDatabase()

app.use(express.json())


app.get("/home",(req,res)=>{
    res.status(200).json({
        message: "Hello World!!!",
    })
})

app.get("/about", (req,res)=>{
    res.status(200).json({
        message: "This is about page!!!",
    })
})


app.post("/blog",async (req,res)=>{

    

    //  console.log(req.body)

    // const title = req.body.title
    // const subtitle = req.body.subtile
    // const description = req.body.description
    // const image = req.body.image
    const {title, subtitle, description, image} = req.body
    await Blog.create({
        title : title,
        subtitle : subtitle,
        description : description,
        image : image,

    })



    res.status(200).json({
        message : "blog api hit successfully...."
    })
})



app.listen(process.env.PORT,()=>{
    console.log("Node.Js project has been started!!!");
})

 