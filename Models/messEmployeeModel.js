import mongoose from "mongoose";

const messEmployeeSchema = mongoose.Schema({
    employeeName: {
        type: String,
        required: true,
        trim: true,
    },
    employeeAddress: {
        type: String,
        required: true,
    },
    employeeSalary: {
        type: Number,
        required: true,
    },
    employeePhone: {
        type: String,
        required: true,
    },
    floorNumber: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hostel",
        required: true,
     },
     roomNumber: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room",
        required: true,
     },
     credentialDetails: {
         username: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
         },
         role: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
         }
     },
     avatar: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
     }
 },
 {timestamps:true})

 const Employee = mongoose.model('Employee', messEmployeeSchema);
 export default Employee;