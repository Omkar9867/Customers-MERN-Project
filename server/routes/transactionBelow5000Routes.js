const express = require('express');
const router = express.Router();
const Transaction = require('../models/transactions');


router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 20;

    const skip = (page - 1) * pageSize;

    // Fetch transactions with pagination
    const transactionsBelow5000 = await Transaction.find(
      {
        'transactions.amount': { $lt: 5000 }
      },
      "account_id transactions",
      { skip: skip, limit: pageSize }
    );

    console.log("transactionsBelow5000", transactionsBelow5000.length);
    return res.status(200).json(transactionsBelow5000);
  } catch (error) {
    console.error('Error fetching transactions below $5000:', error);
    return res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
