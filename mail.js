const nodemailer=require('nodemailer');
const express=require('express');
const otpGenerator=require('otp-generator');
const app=express();
app.use(express.json());

app.post('/message',async (req,resp)=>{
    const {name,email}=req.body;
    const otp=otpGenerator.generate(6);
    if(name && email){
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
      })
    }else{
        console.log('Enter all field');
    }

})

app.listen(3000)