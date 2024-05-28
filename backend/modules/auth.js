const express=require('express');
const User = require('../Schemas/User');
const { body, validationResult } = require('express-validator');
const router=express.Router();
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const nodemailer=require('nodemailer');
const JWT_SCRT="ashim$gautam";

// for creating user
router.post('/createuser',[
    body('name',"enter a valid name").isLength({min:5}),
    body('email',"enter a valid email").isEmail(),
    body('password',"enter a valid password").isLength({min:5}),
],async(req,res)=>{
    try {
        const result = validationResult(req);
        if (!result.isEmpty()) {
          return res.status(400).json({ errors: result.array() });
        }  
        
        const emails=await User.findOne({email:req.body.email});
        if(emails)
        {
            return res.status(400).json({ "error":"email already exists" });
        }
        const user=User(req.body);
        const salt =await bcrypt.genSalt(10);
        const newpass=await bcrypt.hash(user.password,salt);
        user.password=newpass;
        
        const otp = Math.floor(Math.random() * 900000) + 100000;   // otp generate
              // otp can be obtained in console
        const newuser=await User({ name:req.body.name , email:req.body.email,password:newpass,otp:otp});  // main code to send otp to database
        console.log(newuser.otp);
        // await Otp.save(); 

        newuser.save();

        const transporter= nodemailer.createTransport({
            service:'Gmail',
            auth:{
                user:'ashimgautam00@gmail.com',
                pass:'oycs eozb lvbf hnah',
            }
        })
        const emailBody = 
            `<h2><b>Hello ${req.body.name}</h2></b>
            <p>Thank you, ${req.body.name}, for registering with us. Please verify your account by using the OTP below:</p>
            <p>Your OTP:<b> ${otp}</p></b>
            <p>If you didn't request this verification, you can safely ignore this email.</p>`;
        
        const receiver={
            from:'ashimgautam00@gmail.com',
            to:req.body.email,
            subject:`Email verification`,
            html:emailBody,    
        }
        transporter.sendMail(receiver,(error,info)=>{
            if(error){
                console.log(error);
            }
            else{
                console.log("email sent successfully");
            }
        })
        res.send(newuser);
    } catch (error) {
        console.error('Error occurred:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
})

router.post('/verify', async (req, res) => {
    try {
        
        const user = await User.findOne({ otp: req.body.enteredOtp });
        if (!user) {
            return res.status(400).json({ message: "Invalid OTP" });
        }
        // OTP matches, so it's verified
        return res.json({ message: "OTP verified successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }

});


// for login
router.post('/login',
    body('email',"enter a valid email").isEmail(),
    body('password',"enter a valid password").isLength({min:5}),
    async(req,res)=>{
    try {
        const result = validationResult(req);
        if (!result.isEmpty()) {
          return res.status(400).json({ errors: result.array() });
        }  
        const user=await User.findOne({email:req.body.email});    // finding user 
       // console.log(user);
        if(!user)
        {
            return res.status(404).json({ error: 'Invalid credentials user' });            
        }
        const password= await bcrypt.compare(req.body.password,user.password);   // comparing the hash password
        if(!password)
        {
            return res.status(400).json({ error: 'Invalid credentials pass' });
        }
        const data=({
            user:{
                id:user.id
            },
        })
        const token =jwt.sign(data,JWT_SCRT);
        res.status(200).json({ token });
    } catch (error) {
        console.error('Error occurred:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
})




module.exports=router