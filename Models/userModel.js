import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    credentialDetails: {
        username: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ['Resident', 'Admin', 'Staff', 'Manager'],
            required: true,
        }
    },
    parentsDetails: {
        parentPhone: {
            type: String,
            required: true,
        },
    },
    avatar: {
        public_id: {
            type: String,
            required: true,
        },
        secure_url: {
            type: String,
            required: true,
        },
    },
    copyOfBill: {
        public_id: {
            type: String,
            required: true,
        },
        secure_url: {
            type: String,
            required: true,
        },
    }

}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

export default User;
