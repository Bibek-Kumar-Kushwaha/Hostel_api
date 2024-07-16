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

    personalDetails: {
        name: {
            firstname: {
                type: String,
                required: true,
                trim: true,
            },
            middlename: {
                type: String,
                trim: true,
            },
            lastname: {
                type: String,
                required: true,
                trim: true,
            },
        },
        dob: {
            type: Date,
            required: true,
        },

        citizenshipDetails: {
            idNumber: {
                type: String,
            },
            image: {
                public_id: {
                    type: String,
                },
                secure_url: {
                    type: String,
                },
            }
        }
    },

    contactInfo: {
        address: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            lowercase: true,
            required: true,
            unique: true,
            trim: true,
        },
        phone: {
            type: String,
            required: true,
        },
    },
    
    parentsDetails: {
        phone: {
            type: String,
            required: true,
        },
    },
    education: {
        type: String,
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

}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

export default User;