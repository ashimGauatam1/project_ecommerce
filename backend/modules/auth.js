const express=require('express');
const User = require('../Schemas/User');
const { body, validationResult } = require('express-validator');
const router=express.Router();
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const nodmailer=require('nodemailer');
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
        const otp=Math.floor(Math.random()*900000+100000); //otp
        console.log(otp);
        const newuser=new User({name:req.body.name,email:req.body.email,password:req.body.password,otp})
        // user.save();
        // res.send(newuser);
        const transporter= nodmailer.createTransport()={
            server:'gmail',
            auth:{
                user:'ashimgautam00@gmail.com',
                pass:'oycs eozb lvbf hnah',
            }
        }
        const receiver={
            from:'ashimgautam01@gmail.com',
            to:User.email,
            subject:`hello ${User.name}`,
            text:`Thank you for registering with us here is your otp to verify your account :- ${otp}`
        }
        transporter.sendmail(receiver,(error,info)=>{
            if(error){
                console.log(error);
            }
            else{
                console.log("email sent successfully");
            }
        })
    } catch (error) {
        console.error('Error occurred:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
})


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