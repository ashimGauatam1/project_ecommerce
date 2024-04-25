const express=require('express');
const User = require('../Schemas/User');
const { body, validationResult } = require('express-validator');
const router=express.Router();
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

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
        console.log(emails);
        if(!emails)
        {
            const user=User(req.body);
            const salt =await bcrypt.genSalt(10);
            const newpass=await bcrypt.hash(user.password,salt);
            user.password=newpass;
            user.save();
            res.send(user);
        }
        return res.status(400).json({ "error":"email already exists" });
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