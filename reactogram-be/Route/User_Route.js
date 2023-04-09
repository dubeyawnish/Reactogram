import express from 'express'
import mongoose from 'mongoose';



const router=express.Router();
const UserModel=mongoose.model('userModel')

router.post('/signup',(req,res)=>{
    const{fullName,email,password,profileImg}=req.body;
    if(!fullName || !email || !password ){
        return res.status(400).json({error:"one or more filds are empty"});
    }

})

module.exports=router;