import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    brand: { type: String, required: true },
    Phone: { type: String, required: true },
    ReleaseDate: { type: Date, required: true },
    OS: { type: String, required: true },
    Display: { type: [String], required: true },
    Processor: { type: String, required: true },
    Storage: { type: [String], required: true },
    RAM: { type: [String], required: true },
    RearCamera: { type: [String], required: true },
    FrontCamera: { type: [String], required: true },
    Price: { type: Number, required: true },
    Like: { type: [String], default: [] },
    userid: { type: String },
    image: { type: [String], required: false },
});
const products =
    mongoose.models.Product || mongoose.model("Product", productsSchema);

module.exports = products;
