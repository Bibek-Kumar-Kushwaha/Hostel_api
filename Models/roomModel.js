import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    roomNumber: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        enum: ['Single', 'Double', 'Triple', 'Dormitory'],
        required: true,
    },
    availability: {
        type: Boolean,
        default: true,
    },
    studentName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true,
    },
    floorNumber: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hostel",
        required: true,
    },
    fees: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Fee",
        required: true,
    },
    furnitureId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Furniture",
        required: true,
    }
}, { timestamps: true });

const Room = mongoose.model('Room', roomSchema);
export default Room;
