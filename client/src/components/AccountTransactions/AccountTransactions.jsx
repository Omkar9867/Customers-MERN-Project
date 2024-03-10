import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './AccountTransactions.css'

const AccountTransactions = () => {
    const {accountId} = useParams();
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/transactions/${accountId}`);
                const data = response.data[0]
                setTransactions(data.transactions) 
            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
        };

        fetchTransactions();
    }, [accountId])
  return (
    <>
    <div className='acc-transaction-container'>
        <h2>Tansaction for Account : {accountId}</h2>

        <table className='acc-transaction-table'>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Transaction Code</th>
                    <th>Symbol</th>
                    <th>Price</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((transaction, index) => (
                    <tr key={index}>
                        <td>{transaction.date}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.transaction_code}</td>
                        <td>{transaction.symbol}</td>
                        <td>{transaction.price}</td>
                        <td>{transaction.total}</td>

                    </tr>
                ))}
            </tbody>
        </table>

    </div>
    
    </>
  )
}

export default AccountTransactions