const mongoose = require('mongoose');

const transactionArrSchema = new mongoose.Schema({
    "date" : Date,
    "amount" : Number,
    "transaction_code" : String,
    "symbol" : String,
    "price" : String,
    "total" : String
})

const transactionSchema = new mongoose.Schema({
    account_id: Number,
    transactions: [transactionArrSchema],
    // date: {
    //     type: Date
    //   },
    //   amount: {
    //     type: Number
    //   },
    //   transaction_code: {
    //     type: String
    //   },
    //   symbol: {
    //     type: String
    //   },
    //   price: {
    //     type: Number
    //   },
    //   total: {
    //     type: Number
    //   }
});

module.exports = mongoose.model('Transaction', transactionSchema);