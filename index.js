import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './Config/dbConnect.js';
import Route from './Routes/userRoute.js';
dotenv.config();
const app = express();

//Constant
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON
app.use(express.json());

//middleware
app.use(cors());
app.use('/api/v1/user',Route);
//Connect to database
connectDB();

app.get('/', (req,res)=>{
   res.send("Hi I am ready to serve ...");
})

app.listen(PORT, (req,res)=>{
    console.log(`I am serving at http://localhost:${PORT}`);
});