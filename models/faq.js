const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FAQSchema = new Schema({
    header: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    strict: true,
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" }
});

const FAQ = mongoose.model("FAQ",FAQSchema);

module.exports = FAQ;