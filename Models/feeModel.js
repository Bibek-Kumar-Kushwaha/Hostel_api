import mongoose from "mongoose";

const feeSchema = new mongoose.Schema({
    feeMonthly: {
        type: Number,
        required: true,
    },
    FeeStatus: {
        type: Boolean,
        required: true,
    }
},
{timestamps:true})

const Fee = mongoose.model('Fee', feeSchema);
export default Fee;