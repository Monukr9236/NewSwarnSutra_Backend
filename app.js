const express = require('express');
const dotenv=require('dotenv');
const bcrpyt=require('bcrypt');
const nodemailer=require('nodemailer');
const otpGenerator=require('otp-generator');
const productItem=require('./productSchema')
const cors=require('cors');
const messageSend=require('./messageSchema');
const app = express();
app.use(express.json());
app.use(cors());

// imporing the configuration file
require('./configuration');

// imorting user collection 
const User=require('./userSchema');


// importing env file
dotenv.config({path:'./config.env'});
const PORT=process.env.PORT;


// signup API of
app.post('/signup',async (req,resp)=>{
  const {name,email,password}=req.body;
  if(name && email && password){
    let checkUser=await User.findOne({email:email});
    if(checkUser){
      resp.json({message:'User already exist',status:223})
      return;
    }else{
      const otp=otpGenerator.generate(6,{ upperCaseAlphabets: false, specialChars: false ,lowerCaseAlphabets:false});
      const transport=nodemailer.createTransport({
        service:'hotmail',
        auth:{
          user:'verifyswarnsutra@hotmail.com',
          pass:'Ssutra3005@'
        }
      });
      
      const option={
        from:'verifyswarnsutra@hotmail.com',
        to:`${email}`,
        subject:'OTP For Registration Of Swarnsutra.com',
        text:`Hello ${name},Please verify your account with OTP ${otp}`
      };
      transport.sendMail(option,(error,info)=>{
        if(error){
          resp.json({message:'OTP Generation failed',status:502});
          return;
        }
        else{
          resp.json({OTP:otp});
      }
  })
      let hashedPassword=await bcrpyt.hash(password,10);
      let perfetUser={"name":name,"email":email,"password":hashedPassword,verify:"false"};
      let makeNewUser=new User(perfetUser);
      let saveNewUser=await makeNewUser.save();
        if(saveNewUser){
          resp.status(200).json({message:'Signup success without otp verified',status:200,OTP:otp,userInfo:{name:name,email:email}});
        }else{
          resp.status(504).json({message:'Internal server error',status:504});
        }
    }
  }else{
    resp.json({message:'Please input all field',status:502});
  }
});

// Route to get all items from the database
app.post('/login', async (req, resp) => {
    const {email,password}=req.body;
    if(email && password){
      const checkUser=await User.findOne({email:email});
      if(checkUser){
        if(checkUser.verify=="false"){
          resp.json({message:'Your account is not verified',status:501,email:checkUser.email});

        }else{
          const checkPass=await bcrpyt.compare(password,checkUser.password);
          if(checkPass){
            resp.json({message:'Login success',status:201,userInfo:{name:checkUser.name,email:checkUser.email}});
          }else{
            resp.json({message:'Wrong password',status:503});
          }
        }
      }else{
        resp.status(502).json({message:'User not registered',status:502});
      }
    }else{
      resp.status(501).json({message:'Please fill all required filled',status:501});
    }
});


// product
app.get('/image',async (req,resp)=>{
  // ptitemcall=productItemCall
  const ptitemcall=await productItem.find();
  resp.send(ptitemcall);
});


//forgot otp generator api
app.post('/forgototp',async (req,resp)=>{
  const {email}=req.body;
    if(email){
      const checkUser=await User.findOne({email:email});
      const {name}=checkUser;
      if(checkUser){
        if(checkUser.verify=="true"){

          const otp=otpGenerator.generate(6,{ upperCaseAlphabets: false, specialChars: false ,lowerCaseAlphabets:false});
          const transport=nodemailer.createTransport({
          service:'hotmail',
          auth:{
            user:'verifyswarnsutra@hotmail.com',
            pass:'Ssutra3005@'
          }
        });
  
        const option={
          from:'verifyswarnsutra@hotmail.com',
          to:`${email}`,
          subject:'Validate Your Account',
          text:`Hello ${name}, Please verify your account with this code ${otp}`
        };
        transport.sendMail(option,(error,info)=>{
          if(error){
            resp.json({message:'OTP Generation failed',status:502});
            return;
          }
          else{
            resp.json({message:'OTP Sent successfully',OTP:otp,status:200,email:checkUser.email});
        }
    })
        }else{
          resp.json({message:"Your Account is already verified"});
        }
      }else{
        resp.status(502).json({message:'User not registered',status:502});
      }
    }else{
      resp.status(501).json({message:'Please fill all required filled',status:501});
    }
}) 

// update password
app.put('/updatePassword',async(req,resp)=>{
  const {email,password}=req.body;
  if(email && password){
    let hashedPassword=await bcrpyt.hash(password,10);
    const updatePass=await User.updateOne({email:email},{$set:{password:hashedPassword}});
    if(updatePass){
      resp.json({message:'Password has been change',status:201});
    }else{
      resp.json({message:'Failed to update your password',status:502});
    }
  }else{
    resp.json({messsage:'Please input all required filled',status:502});
  }
  
})

// verifing and updating verify false to true 
app.put('/verify',async (req,resp)=>{
  const {email}=req.body;
  const updateUser=await User.updateOne({email:email},{$set:{verify:"true"}});
  if(updateUser){
    resp.json({message:'Account verified',status:201});
  }else{
    resp.json({message:'Something went wrong try again later'});
  }
})

// contact us api
app.post('/message',async (req,resp)=>{
  const postMessage=new messageSend(req.body);
  const saveMessage=await postMessage.save();
  if(saveMessage){
    resp.json({message:'Success',status:201});
  }else{
    resp.json({message:'Failed',status:502});
  }

})

// Start the Express app
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
