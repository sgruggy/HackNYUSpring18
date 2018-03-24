const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    displayName: String,
    location: String,
    room: String,
    createdAt: {type: Date, default: Date.now},
    subject: String,
    className: String,
    groupSize: Number,
    expiresAt: {type: Date, default: Date.now, expires: 10800}
});

mongoose.model('Post', postSchema, 'posts');
mongoose.connect('mongodb://sgruggy:root@ds123259.mlab.com:23259/hacknyu');
