import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: [true, "please provide a username"],
        unique: true,
    },
    email: {
        type: String,
        require: [true, "please provide a email"],
        unique: true,
    },
    password: {
        type: String,
        require: [true, "please provide a password"],
    },
    siverfied: {
        type: Boolean,
        default: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isManager: {
        type: Boolean,
        default: false,
    },
    forgetpasswordtokan: String,
    forgetpasswordtokanexpiry: Date,
    varifytokan: String,
    varifytokanexpiry: Date,
});

module.exports = mongoose.models.users || mongoose.model("users", userSchema);
