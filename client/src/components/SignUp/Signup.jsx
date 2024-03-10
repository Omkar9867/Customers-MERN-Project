import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import './Signup.css'


const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            console.log('User signed up: ', userCredential.user);
            navigate('/')
        } catch (error) {
            console.error('Error signing up:', error.message);
            alert(error.message)
        }
    }


  return (
    <>
    <div className="signup-container">
        <h2 className="signup-title">SignUp</h2>
        <div className="signup-form">
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
            <button className="signup-button" onClick={handleSignup}>SignUp</button>
        </div>
    </div>
    </>
    
  )
}

export default Signup;
