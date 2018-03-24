const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    displayName: String,
    location: String,
    createdAt: {type: Date, default: Date.now},
    displayName: String,
    groupSize: Number,
    startTime: Date,
    endTime: Date
})