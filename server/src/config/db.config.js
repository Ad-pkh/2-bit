require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL,{
    dbName:process.env.MONGODB_NAME,
    autoCreate: true,
    autoIndex: true
}).then(()=>{
    console.log("DB server connected successfully...")
})
.catch((exception)=>{
    console.log(exception)
    process.exit(1)
})