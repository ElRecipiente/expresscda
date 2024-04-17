import mongoose from "mongoose";
const { Schema } = mongoose;

const appointment = new Schema({
    start_date: { type: Date },
    society: {
        name: { type: String, required: true },
        mail: { type: String, required: true, unique: true },
        driver: {
            firstname: { type: String, required: true },
            lastname: { type: String, required: true }
        },
        vehicle: {
            brand: { type: String, required: true },
            model: { type: String, required: true },
            registration_number: { type: String, required: true }
        }
    }
})