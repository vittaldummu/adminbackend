const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AboutSchema = new Schema({
    header: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
},
{
    strict: true,
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } 
});

module.exports = About = mongoose.model("About", AboutSchema);