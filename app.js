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


app.listen(3000,()=>{
    console.log("Node.Js project has been started!!!");
})

echo "# -MERN3.NODE" >> README.md
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Govinda835/-MERN3.NODE.git
git push -u origin main