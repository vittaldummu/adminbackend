const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PrivacySchema = new Schema({
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

const Privacy = mongoose.model("Privacy", PrivacySchema);

module.exports = Privacy;