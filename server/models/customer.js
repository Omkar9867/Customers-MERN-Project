const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: String,
    address: String,
    active: Boolean,
    accounts: [String]
});

module.exports = mongoose.model('Customer', customerSchema)

