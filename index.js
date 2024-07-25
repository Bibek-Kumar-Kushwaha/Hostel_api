import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './Config/dbConnect.js';
dotenv.config();
const app = express();

//Constant
const PORT = process.env.PORT || 4000;

//middleware
app.use(cors());

//Connect to database
connectDB();

app.get('/', (req,res)=>{
   res.send("Hi I am ready to serve ...");
})

app.listen(PORT, (req,res)=>{
    console.log(`I am serving at http://localhost:${PORT}`);
});