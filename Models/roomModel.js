import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    roomNumber: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    type: {
        type: String,
        enum: ['Single', 'Double', 'Triple', 'Dormitory'],
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    }, 
    availability: {
        type: Boolean,
        default: true,
    },
    floor: {
        type: Number,
        required: true,
    },
    fees: {
        type: Number,
        require: true,
    },
}, { timestamps: true });

const Room = mongoose.model('Room', roomSchema);
export default Room;
