const mongoose=require('mongoose');

// Defining schema for the user
const Schema = mongoose.Schema;
const itemSchema = new Schema({
  otp:String
});

// Defining model
const otpUser=mongoose.model('otp',itemSchema);

module.exports=otpUser;
