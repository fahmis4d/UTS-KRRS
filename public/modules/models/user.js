const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    userid: String,
    email: String,
    password: String,
});

module.exports = mongoose.model('Users', schema);