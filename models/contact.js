const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, {
    strict: true,
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" }
  });

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;