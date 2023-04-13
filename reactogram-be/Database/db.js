const mongoose=require('mongoose');
const dotenv =require('dotenv');
dotenv.config();
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

  const connection =async()=>{
    const URL=`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@reacto-app.dyenhwl.mongodb.net/?retryWrites=true&w=majority`;
    try{
    await mongoose.connect(URL,{useNewUrlParser:true});
    console.log("Database connected succeessfully");
    }
    catch{
        console.log("Error while connecting with data basae",error);

    }
}
module.exports=connection;