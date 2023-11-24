
import jwt from 'jsonwebtoken';
import User from '../model/user.js'



const requireAuth= async(req,res,next)=> {
 console.log('1')
    try{

 const token = req.cookies.Authorization;

 console.log(token)

 const decoded=jwt.verify(token,process.env.SECRET_KEY)
 console.log(decoded)

 const user= await User.findOne(decoded.sub);
 console.log(user)

 

 if(!user)  return res.sendStatus(401) 
 console.log('5')
 


 req.user=user;



 console.log('6')

 next();

 }catch(error){
    console.error(error);
    return res.sendStatus(401)
 }


 
}

export default requireAuth;
