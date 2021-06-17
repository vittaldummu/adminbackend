const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TermsSchema = new Schema({
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

const Terms = mongoose.model("Terms", TermsSchema);

module.exports = Terms;