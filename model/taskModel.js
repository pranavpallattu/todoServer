const mongoose=require('mongoose')

const taskSchema=new mongoose.Schema({
    title:{
        required:true,
        type:String
    },
    completed:{
        required:true,
        type:Boolean,
        default:false
    },
    createdAt:{
        required:true,
        type:Date,
        default:Date.now
    }
})

const Task=mongoose.model("Task",taskSchema)

module.exports=Task