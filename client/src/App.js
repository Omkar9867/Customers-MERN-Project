import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Signup from './components/SignUp/Signup';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import AccountTransactions from './components/AccountTransactions/AccountTransactions';
import TransactionBelow5000 from './components/TransactionBelow5000/TransactionBelow5000';
import DistinctProducts from './components/DistinctProducts/DistinctProducts';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route  path="/signup" element={ <Signup/> } />
          <Route  path="/" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path='/account/:accountId' element={<AccountTransactions/>}/>
          <Route path='/transactions-below-5000/' element={<TransactionBelow5000/>}/>
          <Route path='/distinct-products/' element={<DistinctProducts/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
