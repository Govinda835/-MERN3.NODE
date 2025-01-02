const mongoose = require("mongoose")
async function connectToDatabase()
{
    const connectionStatus= await mongoose.connect(process.env.MONGODB_URL)
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



