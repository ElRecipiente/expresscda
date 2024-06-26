import mongoose from "mongoose";

// Shortcut to use mongoose methods (?)
const { Schema } = mongoose;
const { model } = mongoose;

// Create Config Schema
const configSchema = new Schema({
    truck_lift_number: {
        type: Number,
        default: 2
    },
    date : {
        type: Date,
        default: Date.now
    }
})

const Config = model('Config', configSchema);

export default Config;