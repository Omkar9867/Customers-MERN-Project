const mongoose = require('mongoose');

const accountsSchema = new mongoose.Schema({
    account_id : Number,
    products : [String]
});

module.exports = mongoose.model('Accounts', accountsSchema);