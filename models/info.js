import mongoose from "mongoose";
const { Schema } = mongoose;

const info = new Schema({
    mail: { type: String, required: true },
    adress: { type: String, required: true },
    phone_number: { type: Number, required: true }
})