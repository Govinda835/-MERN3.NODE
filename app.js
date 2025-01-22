require("dotenv").config()
const express = require("express")
const { connectToDatabase } = require("./database")
const { Blog } = require("./model/blogModel")

const app = express()
connectToDatabase()

app.use(express.json())
const {multer, storage} = require("./middleware/multerConfig")
const upload = multer({storage : storage})


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


app.post("/blog",upload.single("image"),(req,res)=>{

    console.log(req.body)

    res.status(200).json({
        message : "blog api hit successfully...."
    })

    //  console.log(req.body)

    // const title = req.body.title
    // const subtitle = req.body.subtile
    // const description = req.body.description
    // const image = req.body.image

    //const {title, subtitle, description, image} = req.body
    // if(!title)
    // {
    //     return res.status(400).json({
    //         message : "please enter the title...."
    //     })
    // }
    // if(!subtitle)
    // {
    //     res.status(400).json({
    //         message : "please enter the subtitle...."
    //     })
    // }

    // await Blog.create({
    //     title : title,
    //     subtitle : subtitle,
    //     description : description,
    //     image : image,

    // })

})


app.listen(process.env.PORT,()=>{
    console.log("Node.Js project has been started!!!");
})

 