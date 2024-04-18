import mongoose from "mongoose";

// Shortcut to use mongoose methods (?)
const { Schema } = mongoose;
const { model } = mongoose;

// Create Info Schema
const infoSchema = new Schema({
    mail: { type: String, required: true },
    adress: { type: String, required: true },
    phone_number: { type: Number, required: true }
})

const Info = model('Info', infoSchema);

export default Info;