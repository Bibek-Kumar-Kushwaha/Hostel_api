import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
const app = express();

//Constant
const PORT = process.env.PORT || 3000;

//middleware
app.use(cors());




app.get('/', (req,res)=>{
   res.send("Hi I am ready to serve ...");
})

app.listen(PORT, (req,res)=>{
    console.log(`I am serving at http://localhost:${PORT}`);
});