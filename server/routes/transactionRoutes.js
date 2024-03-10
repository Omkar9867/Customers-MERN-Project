const express = require('express');
const Transaction = require('../models/transactions')

const router = express.Router();


//All Customers
router.get('/:accountId', async (req, res) => {
    const {accountId} = req.params;
    try {
        const transactions = await Transaction.find({account_id: accountId});
        res.json(transactions)
    } catch (error) {
        console.error('Error fetching transactions:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;