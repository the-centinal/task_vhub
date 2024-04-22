const mongoose = require("mongoose");

const URI = "mongodb+srv://praveenyadav340:lbHdMFDYEJNYQRWS@cluster0.ozrfreb.mongodb.net/user_vhub?retryWrites=true&w=majority&appName=Cluster0"
// mongoose.connect('mongodb+srv://praveenyadav340:lbHdMFDYEJNYQRWS@cluster0.ozrfreb.mongodb.net/user_vhub?retryWrites=true&w=majority&appName=Cluster0');

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("DB connection successfull");
    } catch (error) {
        console.error("database connection failed");
        process.exit(0);        
    }
};

module.exports =  connectDb;