const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');


// Routes
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

// Load env vars
dotenv.config();

// Connect to Mongo
connectDB();



// Body parser
app.use(cors());
app.use(express.json());

// Mount routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes); 
app.use('/api/users', userRoutes); 

// Test route
app.get('/', (req, res) => {
    res.json({
      message: 'Welcome to the API!',
      instructions: {
        registerUser: {
          method: 'POST',
          endpoint: '/api/auth/register',
          description: 'Register a new user.',
          example_request_body: {
            "name": "John Doe",
            "email": "john.doe@example.com",
            "password": "password123"
          },
          example_response: {
            "_id": "user_id",
            "name": "John Doe",
            "email": "john.doe@example.com",
            "token": "jwt_token"
          }
        },
        registerAdmin: {
          method: 'POST',
          endpoint: '/api/auth/register-admin',
          description: 'Register a new admin user (only accessible to authorized users).',
          example_request_body: {
            "name": "Admin",
            "email": "admin@example.com",
            "password": "adminpassword"
          },
          example_response: {
            "_id": "admin_id",
            "name": "Admin",
            "email": "admin@example.com",
            "role": "admin",
            "token": "jwt_token"
          }
        },
        login: {
          method: 'POST',
          endpoint: '/api/auth/login',
          description: 'Log in a user and receive a JWT token.',
          example_request_body: {
            "email": "john.doe@example.com",
            "password": "password123"
          },
          example_response: {
            "_id": "user_id",
            "name": "John Doe",
            "email": "john.doe@example.com",
            "token": "jwt_token"
          }
        },
        updateUser: {
          method: 'PUT',
          endpoint: '/api/users/:id',
          description: 'Update an existing user by ID.',
          example_request_body: {
            "name": "Updated Name",
            "email": "updated@example.com"
          },
          example_response: {
            "_id": "user_id",
            "name": "Updated Name",
            "email": "updated@example.com"
          }
        },
        deleteUser: {
          method: 'DELETE',
          endpoint: '/api/users/:id',
          description: 'Delete a user by ID.',
          example_response: {
            "message": "User deleted successfully"
          }
        }
      },
      note: 'Use Postman or a similar tool to test POST, PUT, and DELETE operations. Ensure to pass the correct data and token if needed.',
    });
  } );

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
