import mongoose from "mongoose";
const connectDB = () => {
    try {
        mongoose.connect(process.env.URI, 
            {
                dbName: process.env.DBNAME
            })
        console.log("DATABASE CONNECT SUCCESSFULLY");
    } catch (error) {
        console.log('Error while connecting database', error);
    }

}
export default connectDB;
