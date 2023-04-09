const express = require('express');
const cors = require('cors');
//const mongoose = require('mongoose');
const Connection =require('./Database/db.js');
//const { MONGODB_URL } = require('./config')
const app=express();
/*
mongoose.connect(MONGODB_URL);
mongoose.connection.on('connected',()=>{
    console.log("DB Connected Successfully");
})

mongoose.connection.on('error',(error)=>{
    console.log("Some error occured while connecting with DB" )
})

*/

require('./Models/User_Model')


app.use(cors());
app.use(express.json());

app.use(require('./Route/User_Route'));


const PORT=4000;



app.listen(PORT,()=>{
    console.log("Server Started");
})
Connection();