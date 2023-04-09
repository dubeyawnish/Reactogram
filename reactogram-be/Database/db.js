const mongoose=require('mongoose');

  const connection =async()=>{
    const URL='mongodb+srv://amansomvanshi15:Abhinesh@reacto-app.dyenhwl.mongodb.net/?retryWrites=true&w=majority';
    try{
    await mongoose.connect(URL,{useNewUrlParser:true});
    console.log("Database connected succeessfully");
    }
    catch{
        console.log("Error while connecting with data basae",error);

    }
}
module.exports=connection;