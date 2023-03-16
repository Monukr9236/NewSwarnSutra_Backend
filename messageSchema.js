const mongoose=require('mongoose');

// Defining schema for message
const Schema = mongoose.Schema;
const itemSchema = new Schema({
    email:String,
    message:String
});

// Defining model
const messageSend=mongoose.model('messages',itemSchema);

module.exports=messageSend;
