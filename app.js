require("dotenv").config()
const express = require("express")
const { connectToDatabase } = require("./database")
const { Blog } = require("./model/blogModel")

const app = express()

const fs = require("fs")

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


app.post("/blog",upload.single("image"),async (req,res)=>{

    console.log(req.body)
    const {title, subtitle, description,} = req.body
    const filename = req.file.filename
    if(!title || !subtitle || !description)
    {
        return res.status(400).json({
            message : "please provide title, subtitle, description...."
        })
    }
    await Blog.create({
        title : title,
        subtitle : subtitle,
        description : description,
        image : filename
    })
    //console.log(req.file)

    res.status(200).json({
        message : "blog api hit successfully...."
    })
})

app.get("/blog", async (req,res)=>{
    const blogs = await  Blog.find() // always gives data in the form of array 

    res.status(200).json({
        message : "api fetched successfully...",
        datas : blogs
    })
})
app.use(express.static("./storage"))


app.get("/blog/:id", async (req,res)=>{
    const id = req.params.id
    const blog = await Blog.findById(id)
    if(!blog)
    {
         res.status(404).json({
            message : "data not found....."
        })
    }
    else
    {
    res.status(200).json({
    message : "Blog api fetched successfully.... ",
    data : blog
    })
    }
})

app.delete("/blog/:id", async (req,res)=>{
   const id = req.params.id
   const blog = await Blog.findById(id)
   const imageName = blog.image
   fs.unlink("storage/"+ imageName,(err)=>{
    if(err){
        console.log("fail not deleted...")
    }
    else 
    {
        console.log("image deleted sucessfully.... ")
    }
   })
    

   await Blog.findByIdAndDelete(id)
   res.status(200).json({
    message : "blog deleted successfully....."
   })
})


app.listen(process.env.PORT,()=>{
    console.log("Node.Js project has been started!!!");
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

 