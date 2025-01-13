const { text } = require("express")
const mongoose = require("mongoose") 
const blogSchema = new mongoose.Schema({
    title : {
        type : String,
        require : true
    },
    subtitle : {
        type : text,

    },
    description : {
        type : text
    },
    image : {
        type : String
    }

})


const Blog = mongoose.model("Blog",blogSchema)

module.exports = {
    Blog
}