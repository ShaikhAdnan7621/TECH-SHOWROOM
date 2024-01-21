import mongoose from "mongoose";
import { stringify } from "postcss";

const commentschema = new mongoose.Schema(
    {
        comment: { type: String, required: true },
        userid: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
        username: { type: String, required: true },
    },
    { timestamps: true },
);
const imageSchema = new mongoose.Schema({
    url: String,
});

const postSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        tags: { type: [String], required: true },
        publishat: { type: String, default: Date.now, required: true },
        uploadas: { type: String, enum: ["Schadule", "Published"] },
        likes: { type: [String], default: [] },
        comments: [commentschema],
        image: {
            type: [imageSchema],
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            required: true,
        },
    },
    { timestamps: true },
);
const posts = mongoose.models.post || mongoose.model("post", postSchema);

module.exports = posts;
