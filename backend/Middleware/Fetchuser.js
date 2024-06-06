const JWT_SCRT="ashim$gautam";
const jwt=require('jsonwebtoken');

const fetchuser=(req,res,next)=>{
    const token=req.header('authToken');
    if(!token){
        res.status(400).send("Invalid User");
    }
    try {
            const data =jwt.verify(token,JWT_SCRT);
            if(!data){
                res.status(400).send("Invalid Token");
            }else{
                req.user=data.user;
            }
            next();
        
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}

module.exports=fetchuser;