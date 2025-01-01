const mongoose = require("mongoose")
async function connectToDatabase()
{
    const connectionStatus= await mongoose.connect("mongodb+srv://govinda835:helloworld@cluster0.czl5j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
try {
    if(connectionStatus)
    {
        console.log("database connected successfully!!!!")
    }
    else
    {
        console.log("database connection fail!!!")
    }
    
} catch (error) {
    console.log("database connection fail",error)
    
}
}

module.exports={
    connectToDatabase
}



