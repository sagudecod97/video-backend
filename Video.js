const mongoose = require("mongoose");
const DB_URL = "mongodb+srv://sagudecod97:bgoLQN60@cluster0-yawjl.mongodb.net/test?retryWrites=true";

mongoose.connect(DB_URL,{useNewUrlParser: true}),(err)=>{
    if(!err){
        console.log("DB Connection SUCCESFUL");
    }else{
        console.log(err);
    }
}

const Schema = mongoose.Schema;
const videoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type:String,
        required: true
    },
    online: {
        type: Boolean,
        required: true
    }
})

const Video = mongoose.model("Video", videoSchema);
module.exports = {
    Video
}