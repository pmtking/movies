// Import necessary modules and libraries
import express, { Request, Response } from 'express'; // Express framework for Node.js
import Queue from 'bull'; // Bull for handling job queues
import cors from "cors"; // CORS for enabling cross-origin requests
import bodyParser from "body-parser"; // Middleware for parsing request bodies
import passport from 'passport'; // Authentication middleware
import mongoose from 'mongoose'; // Mongoose for MongoDB interaction

// Initialize the Express app
const app = express();

// Middleware for parsing URL-encoded data
app.use(express.urlencoded({ extended: false }));

// Middleware to allow cross-origin requests
app.use(cors());

// Middleware for parsing JSON data
app.use(express.json());

// Middleware for parsing application/x-www-form-urlencoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware for parsing application/json data
app.use(bodyParser.json());

// Initialize Passport.js for authentication
app.use(passport.initialize());

// Database connection setup
mongoose.connect('mongodb://localhost:27017/movies', { // Replace 'your_database' with your actual database name
    
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});

// Define a route for the root endpoint
app.get('/', (req: Request, res: Response) => {
    res.send('Hello from the setup file'); // Response to GET request at the root URL
});

// Export the app to use in other parts of your project
export default app;
