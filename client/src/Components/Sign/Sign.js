import React, { useState } from 'react';
import validator from 'validator'; // Import the validator library
import './Sign.css';

const Sign = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // State for error message

    const handleRegister = async () => {
        // Validate email and password here
        if (!isValidEmail(email)) {
            setErrorMessage('Invalid email format. Please try again.');
            return;
        }
        if (!isValidPassword(password)) {
            setErrorMessage('Invalid password format. Please try again.');
            return;
        }

        // Clear the error message if validation passes
        setErrorMessage('');
        try {
            const response = await fetch('http://localhost:8000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, username, password }),
            });

            if (response.ok) {
                console.log('Registration Successful');
            } else {
                console.error('Registration failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const isValidEmail = (email) => {
        // Use the validator library to check for a valid email
        return validator.isEmail(email);
    };

    const isValidPassword = (password) => {
        // Password must meet your custom criteria:
        // Add your checks here (e.g., length, complexity)
        return (
            password.length >= 8 && // At least 8 characters
            /[a-z]/.test(password) && // Contains at least one lowercase letter
            /[A-Z]/.test(password) && // Contains at least one uppercase letter
            /\d/.test(password) && // Contains at least one digit
            /[@$!%*?&]/.test(password) // Contains at least one special character
        );
    };

    return (
        <div className="form">
            <form>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" required onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required onChange={(e) => setUsername(e.target.value)} />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button className="btn btn-primary" type="button" onClick={handleRegister}>
                    Register
                </button>
            </form>
        </div>
    );
};

export default Sign;
