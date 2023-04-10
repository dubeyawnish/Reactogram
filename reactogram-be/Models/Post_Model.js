const mongoose=require('mongoose');

const postSchema= new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
});

mongoose.model("PostModel",postSchema);