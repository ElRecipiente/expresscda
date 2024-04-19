import mongoose from "mongoose";

// Shortcut to use mongoose methods (?)
const { Schema } = mongoose;
const { model } = mongoose;

// Create Appointment Schema
const appointmentSchema = new Schema({
    start_date: { type: Date },
    society: {
        name: { type: String, required: true },
        mail: { type: String, required: true },
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

const Appointment = model('Appointment', appointmentSchema);

export default Appointment;