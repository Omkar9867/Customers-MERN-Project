const express = require('express');
const Customer = require('../models/customer');

const router = express.Router();


//All Customers
router.get('/customer-active', async (req, res) => {
    try {
        const customers = await Customer.find({active : {$exists: true}},"name address accounts");
        console.log("customers",customers);
        res.status(200).json(customers)
    } catch (error) {
        console.error('Error fetching customers:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//All Customers
router.get('/customer-inactive', async (req, res) => {
    try {
        const customers = await Customer.find({active: {$exists: false}},"name address accounts");
        console.log("customers",customers);
        res.status(200).json(customers)
    } catch (error) {
        console.error('Error fetching customers:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


//Customer by Id
// router.get('/:customerId', async (req, res) => {
//     const {customerId} = req.params   
//     try {
//         const customer = await Customer.findById(customerId);
//         if(!customer) {
//             return res.status(404).json({ error: 'Customer not found' });
//         } 
//         res.json(customer);
//     } catch (error) {
//         console.error('Error fetching customer :', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

module.exports = router