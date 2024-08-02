import mongoose from "mongoose";

const furnitureSchema = new mongoose.Schema({
    furnitureId: {
        type: String,
        required: true,
    },
    furnitureType: {
        type: String,
        required: true,
    },
    roomNumber: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room",
        required: true,
    }
})

const Furniture = mongoose.model("Furniture", furnitureSchema);
export default Furniture;