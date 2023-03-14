const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/MERN")
.then(()=>{
    console.log("connected");
})
.catch(()=>{
    console.log("failed");
})

mongoose.set('strictQuery', false);
const newSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },

    email:{
        type:String,
        require:true
    },

    message:{
        type:String,
        require:true
    }
})

const collection = mongoose.model("collection", newSchema)
module.exports = collection