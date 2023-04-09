import express from 'express';


const app=express();

const PORT=4000;

app.get('/welcome',(req,res)=>{
    res.status(200).json({"msg":"Hello World"});

})

app.listen(PORT,()=>{
    console.log("Server Started");
})