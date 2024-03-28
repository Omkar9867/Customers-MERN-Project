const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const customerRoutes = require('./routes/customerRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const transactionbelow5000 = require('./routes/transactionBelow5000Routes');
const accountsRoutes = require('./routes/accountsRoutes')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//MOngoDb Connection
mongoose.connect('mongodb://localhost:27017/test-db');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDb connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB')
});

//Routes
app.use('/api/customer', customerRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/transactionbelow5000', transactionbelow5000);
app.use('/api/distinct-count', accountsRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})