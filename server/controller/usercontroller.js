import User from '../model/user.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'






const signup=async(req,res)=>{

const{email,password}=req.body;

const hashedPassword = bcrypt.hashSync(password, 8);

await User.create({email,password:hashedPassword});

res.sendStatus(200);

}


const login=async(req,res)=>{

 const{email,password}=req.body;
 const user=await User.find({email});
 if(!user) return res.sendStatus(401);

 const passwordMatch=bcrypt.compareSync(password,user.password);

 if(!passwordMatch) return res.sendStatus(401);

 const exp=Date.now()+1000*60*60*24*30

 const token = jwt.sign({ sub:user._id,exp}, process.env.SECRET_KEY);


res.cookie(
    "Authorization",token,{
        expires:new Date(exp),
        httpOnly:true,
        sameSite:'lax',
        secure:process.env.NODE_ENV==='production',
    }
)



    res.sendStatus(200)




}

const logout=async(req,res)=>{



}

const checkAuth=(req,res)=>{
    res.sendStatus(200)
}


export default {signup,login,logout,checkAuth} ;