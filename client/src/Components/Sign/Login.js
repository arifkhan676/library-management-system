import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import validator from 'validator'; // Import the validator library
import './Sign.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate email and password here
        if (!isValidEmail(email)) {
            console.error('Invalid email format');
            return;
        }

        try {
            const response = await fetch('http://localhost:8000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                // Successful login
                const data = await response.json();
                setMessage(data.message);
            } else {
                // Login failed
                const data = await response.json();
                setMessage(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const isValidEmail = (email) => {
        // Use the validator library to check for a valid email
        return validator.isEmail(email);
    };

    return (
        <div className='form'>
            <h4>Please Login</h4>
            <NavLink to='/Signin'>
                <p>Don't have an account? Sign in</p>
            </NavLink>

            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        required
                    />
                </div>
                <div>
                    <input
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        required
                    />
                </div>
                <button className='btn btn-primary' type="submit">
                    Submit
                </button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Login;
