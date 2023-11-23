import User from '../model/user.js'


const signup=async(req,res)=>{

const{email,password}=req.body;

await User.create({email,password});

res.sendStatus(200);

}


const login=async(req,res)=>{



}

const logout=async(req,res)=>{



}


export default {signup,login,logout} ;