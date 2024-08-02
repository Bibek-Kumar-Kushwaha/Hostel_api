import mongoose from "mongoose";

const hostelSchema = new mongoose.Schema({
   floorNumber: {
    type: String,
    required: true,
   },
   numberOfRoom: {
    type: Number,
    required: true,
   },
   numberOfStudents: {
    type: String,
    required: true,
   },
   annualExpenses: {
    type: Number,
    required: true,
   }
},
{timestamps:true})

const Hostel = mongoose.model('Hostel',hostelSchema);
export default Hostel;