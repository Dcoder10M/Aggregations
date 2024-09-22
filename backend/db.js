const mongoose = require('mongoose');

const connectDB = async() =>{
    try{
        const mongoUri = process.env.MONGO_URI;
        await mongoose.connect(mongoUri)
        console.log('Connected to DB');
    }catch(e){
        console.error(e);
    }
}

module.exports = connectDB;


