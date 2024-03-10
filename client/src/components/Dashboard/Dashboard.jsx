import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from '../Button/Button';
import './Dashboard.css';

const Dashboard = () => {
    const [customers, setCustomers] = useState([]);
    const [customerType, setCustomerType] = useState('active');

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/customer/customer-${customerType}`);
                setCustomers(response.data);
            } catch (error) {
                console.error('Error fetching customers:', error);
            }
        };

        fetchCustomers();
    }, [customerType]);

    const handleDropDownChange = (e) => {
        setCustomerType(e.target.value);
    };

    return (
        <>
        <div className="dashboard-container">
            <div className="selector">
                <select value={customerType} onChange={handleDropDownChange}>
                    <option value="active">Active Customers</option>
                    <option value="inactive">Inactive Customers</option>
                </select>
            </div>
            <div>
                <table className="dashboard-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Accounts</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer) => (
                            <tr key={customer._id}>
                                <td>{customer.name}</td>
                                <td>{customer.address}</td>
                                <td>
                                    {customer?.accounts.map((account, key) => (
                                        <div key={key}>
                                            <Link to={`/account/${account}`}>{account}</Link>
                                        </div>
                                    ))}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="button-container">
                    <Button title="Transaction Below 5000" go="/transactions-below-5000" css='oneButton' />
                    <Button title="Distinct Products" go="/distinct-products" css='twoButton'/>
                </div>
            </div>
        </div>
        </>
    );
};

export default Dashboard;
