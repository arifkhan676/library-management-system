const express = require('express');
const mongoose = require('mongoose'); // Require Mongoose
const bodyParser = require('body-parser');
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

    // Log the received data to the console
    console.log('Received registration data:');
    console.log('Email:', email);
    console.log('Username:', username);
    console.log('Password:', password);

    try {
        // Create a new user document
        const newUser = new UserSignIn({ email, username, password });

        // Save the user document to the database
        await newUser.save();
        res.status(201).send('User registered successfully.');
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).send('Registration failed.');
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