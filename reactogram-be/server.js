import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { MONGODB_URL } from './config';

const app=express();

mongoose.connect(MONGODB_URL);
mongoose.connection.on('connect',()=>{
    console.log("DB Connected");
})

mongoose.connection.on('error',(error)=>{
    console.log("Some error while connecting with DB" )
})

require('./Models/User_Model')


app.use(cors());
app.use(express.json());
require('./Models/User_Model');
app.use(require('./Route/User_Route'));


const PORT=4000;



app.listen(PORT,()=>{
    console.log("Server Started");
})