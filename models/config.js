import mongoose from "mongoose";
const { Schema } = mongoose;

const config = new Schema({
    truck_lift_number: {type: Number}
})