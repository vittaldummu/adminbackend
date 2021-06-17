const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true
    },
    userRole: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    }
}, {
    strict: true,
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" }
  });

const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;