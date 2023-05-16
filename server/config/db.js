const mongoose = require("mongoose")


const MongoUrl = "mongodb+srv://blog-pages:X54D8pZFqTJnx6h4@cluster0.4dpwnxm.mongodb.net/?retryWrites=true&w=majority"


const InitiateMongoServer = async ()=>{
    try{
        await mongoose.connect(MongoUrl,{
            useNewUrlParser:true
        });
        console.log("connected to db")
    }
    catch(e){
        console.log(e)
        throw e
    }
}

module.exports = InitiateMongoServer
