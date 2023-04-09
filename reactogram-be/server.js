import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { MONGODB_URL } from './config';



const app=express();

const PORT=4000;

app.get('/welcome',(req,res)=>{
    res.status(200).json({"msg":"Hello john"});

})

app.listen(PORT,()=>{
    console.log("Server Started");
})