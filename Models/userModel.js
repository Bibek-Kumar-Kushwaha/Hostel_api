import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    role: {
        type: String,
        enum: ['Resident', 'Admin', 'Staff', 'Manager'],
        required: true,
    },
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

export default User;
