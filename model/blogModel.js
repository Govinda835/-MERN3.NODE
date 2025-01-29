const { text } = require("express")
const mongoose = require("mongoose") 
const blogSchema = new mongoose.Schema({
    title : {
        type : String,
       
    },
    subtitle : {
        type : String,
    },
    description : {
        type : String,
    },
    image : {
        type : String,
    }

})


const Blog = mongoose.model("Blog",blogSchema)

module.exports = {
    Blog
}