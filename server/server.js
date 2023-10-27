const express = require('express');
const mongoose = require('mongoose'); // Require Mongoose
const bodyParser = require('body-parser');
const validator = require('validator');
const cors = require('cors');
const app = express();
const port = 8000;

// Middleware to parse JSON data from the request body
app.use(bodyParser.json());

app.use(cors()); // Enable CORS for all routes

app.get('/', (req,res)=>{
    res.send('Hello From The Server')
})

// Registration route
app.post('/register', async (req, res) => {
    const { email, username, password } = req.body;
    try {
        // Check if an account with this email already exists
        const existingUser = await UserSignIn.findOne({ email });

        if (existingUser) {
            // An account with this email already exists
            return res.status(400).json({ message: 'This email is already in use' });
        }

        // Validate email and password here
        if (!isValidEmail(email) || !isValidPassword(password)) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Create a new user document
        const newUser = new UserSignIn({ email, username, password });

        // Save the user document to the database
        await newUser.save();
        res.status(201).send('User registered successfully.');
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || 'Registration failed' });
    }
});

// Login route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Query the database to find the user by email
    const user = await UserLoginIn.findOne({ email });

    if (!user) {
        // User not found
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    if (user.password !== password) {
        // Passwords do not match
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    // User is authenticated, you can send a success response
    res.json({ message: 'Login successful', user });
});

// Reset Password
app.post('/reset-password', async (req, res) => {
    const { email, newPassword } = req.body;

    try {
        // Check if the email exists in your database
        const existingUser = await UserSignIn.findOne({ email });

        if (!existingUser) {
            return res.status(400).json({ message: 'Email is not registered' });
        }

        // Update the user's password in the database with the new password
        existingUser.password = newPassword; // Make sure to hash the password securely
        await existingUser.save();

        // Respond with a success message
        res.status(200).json({ message: 'Password reset successful' });
    } catch (error) {
        res.status(500).json({ message: 'Password reset failed' });
    }
});


const userSchemaSignIn = new mongoose.Schema({
    email: String,
    username: String,
    password: String,
});

const UserSignIn = mongoose.model('user', userSchemaSignIn);

// Define a user schema and model (if not already defined)
const userSchemaLoginIn = new mongoose.Schema({
    email: String,
    password: String,
});

const UserLoginIn = mongoose.model('User', userSchemaLoginIn);

// Connect to the database when the server starts

// Replace 'YOUR_DB_URI' with your MongoDB connection string
const dbURI = 'mongodb+srv://Bayzed:Pappu7890..@server1.zkpldux.mongodb.net/User_Authentication_and_Authorization';

// Connect to MongoDB using an async function
async function connectToDatabase() {
    try {
        await mongoose.connect(dbURI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

mongoose.set('debug', true);

connectToDatabase();


// Start the server and listen on port 3000
app.listen(port, () => {
   console.log(`Server is running on http://localhost:${port}`);
});

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