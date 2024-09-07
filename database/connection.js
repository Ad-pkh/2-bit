const mongoose = require("mongoose");

exports.connectToDb = async () => {
    try {
        const url = process.env.url; 
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
         
        });
        console.log(`Database Connected Successfully`);
    } catch (error) {
        console.error("Error connecting to database:", error.message);
    }
};
