const mongoose = require('mongoose')
const colors = require('colors');
const { log } = require('console');
const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Dang chay o ${mongoose.connection.host}`.bgCyan.white);

    } catch(error){
        console.log(`${error}`.bgRed)

    }
    
}

module.exports = {
    url: "mongodb://127.0.0.1:27017/opensourceApp"
  };
  