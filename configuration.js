const mongoose=require('mongoose');
const dotenv=require('dotenv');

// importing mongodb url
dotenv.config({path:'./config.env'});
const DB=process.env.DATABASE;

// connecting with database
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });