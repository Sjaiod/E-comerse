import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Item =  mongoose.models.Item || mongoose.model("Item", productSchema); // Change mongoose.models to mongoose.model

export default Item;
