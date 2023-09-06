const mongoose = require("mongoose");

const Schema = mongoose.Schema

// structure
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, { timestamps: true })

// model
module.exports = mongoose.model('Workout', workoutSchema)
