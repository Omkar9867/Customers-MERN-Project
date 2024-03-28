import React, {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import auth from '../../firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'
import './Login.css'


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('User logged in:', userCredential.user);
            navigate('/dashboard')
        } catch (error) {
            console.error('Error logging in:', error.message);
            alert(error.message)
        }
    }
  return (
    <>
    <div className="login-container">
        <h2 className="login-title">Login</h2>
        <div className="login-form">
            <input 
            type="email"
            placeholder='Email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <input 
            type="password"
            placeholder='Password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button className="login-button" onClick={handleLogin}>Login</button>
        </div>
        <div className="signup-link">
            <Link to="/signup">Sign up</Link>
        </div>
    </div>
    </>
  )
}

export default Login;
