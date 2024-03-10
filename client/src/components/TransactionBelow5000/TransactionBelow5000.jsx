import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './TransactionBelow5000.css'

const TransactionBelow5000 = () => {
    const [transactions, setTransactions] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(20);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`http://localhost:5000/api/transactionbelow5000?page=${currentPage}&pageSize=${pageSize}`);
                setTransactions(response.data);
            } catch (error) {
                console.error('Error fetching transactions:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchTransactions();
    }, [currentPage, pageSize]);

    // Function to handle pages
    const nextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    return (
        <>
            <div className="transaction-container">
                <h2>Transactions Details which made at least one transaction below 5000 </h2>

                {loading ?
                    <div className="loader-container">
                        <div className="loader"></div>
                    </div>
                    :
                    <>
                        <table className="transaction-table">
                            <thead>
                                <tr>
                                    <th>Account Ids</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.map((transaction, index) => (
                                    <tr key={index}>
                                        <td>
                                            <Link to={`http://localhost:3000/account/${transaction.account_id}`} className="account-link">{transaction.account_id}</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="pagination">
                            <button className="pagination-btn" onClick={prevPage} disabled={currentPage === 1}>Prev</button>
                            <button className="pagination-btn" onClick={nextPage}>Next</button><span>{currentPage}</span>
                        </div>
                    </>
                }
            </div>
        </>
    )
}

export default TransactionBelow5000;
