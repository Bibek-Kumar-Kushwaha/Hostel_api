import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required: true,
        trim: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
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
    { timestamps: true })

const Students = mongoose.model('Students', studentSchema);
export default Students;