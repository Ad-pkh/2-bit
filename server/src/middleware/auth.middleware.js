require("dotenv").config();
const jwt =require('jsonwebtoken');
const usersvc = require("../modules/user/user.service");

const loginCheck=async (req,res,next)=>{
   try{
       let token=req.headers['authorization'] || null
        if(!token){
            throw{status: 401, message:"unauthorized access"}
        }else{
            token=token.split(" ").pop()

            const data =jwt.verify(token,process.env.JWT_SECRET)
            if(data.hasOwnProperty('type')){//change
              throw{status:403,message:"Access token required"}
            }
           const user = await usersvc.getSingleUserByFilter({
             _id :data.sub

           })
           req.authUser={
            _id: user.id,
            name:user.name,
            email:user.email,
            status:user.status,
            address:user.address,
            phone:user.phone,
            role: user.role
           }
           next();
        }
   }catch(exception){
    console.log(exception)
    next({status:401,message: exception.message})
   }
}

module.exports=loginCheck;