const express = require('express');
const Accounts = require('../models/accounts');

const router = express.Router();

router.get('/', async (req, res) => {

    try {
        const products = await Accounts.distinct(
           "products"
         );
        console.log('distinct-products : ', products);
        return res.status(200).json(products)
    } catch (error) {
        console.error('Error fetching transactions below $5000:', error);
    return res.status(500).json({ message: 'Server error' });
    }
})

module.exports = router