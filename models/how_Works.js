const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const HowSchema = new Schema({
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

const How = mongoose.model("How", HowSchema);

module.exports = How;