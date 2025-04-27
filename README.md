# Backend Project - Full Stack Application
This is the backend for a full-stack application. It provides a REST API with authentication
(login/registration), role-based access (admin and user roles), and CRUD operations for users.
## Table of Contents
- [Project Description](#project-description)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [API Endpoints](#api-endpoints)
- [Testing the API](#testing-the-api)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
## Project Description
This project includes:
- **User Registration & Login**: Register and login users with JWT-based authentication.
- **Admin Registration**: Admin users can register other admin users.
- **Role-Based Access Control**: Different user roles (`user` and `admin`).
- **MongoDB Integration**: MongoDB is used to store user details and authentication data.
- **Security**: Passwords are hashed using `bcryptjs`, and JWT is used for secure authentication.
- **Input Validation**: Input sanitization is done using `lodash`.
## Technologies Used
- **Node.js**: JavaScript runtime for the server.
- **Express**: Web framework for building the API.
- **MongoDB**: NoSQL database for storing user data.
- **Mongoose**: MongoDB ODM (Object Data Modeling) library for Node.js.
- **JWT**: JSON Web Token for authentication and authorization.
- **Bcrypt.js**: For securely hashing passwords.
- **Lodash**: Utility library for input sanitization and validation.
## Setup and Installation
Follow these steps to set up the project locally:
### Prerequisites
- **Node.js**: Install [Node.js](https://nodejs.org/) (v16.x or higher).
- **MongoDB Atlas**: Create an account on [MongoDB
Atlas](https://www.mongodb.com/cloud/atlas) to get a MongoDB connection string.
### Steps to Run Locally
1. Clone the repository:
 ```bash
 git clone https://github.com/your-username/backend-project.git
 cd backend-project
 ```
2. Install the necessary dependencies:
```bash
 npm install
 ```
3. Create a `.env` file in the root directory and add the following environment variables:
 ```
 MONGO_URI=<your_mongo_connection_string>
 JWT_SECRET=<your_jwt_secret_key>
 ```
4. Run the application locally:
 ```bash
 npm start
```
 The backend server should now be running on `http://localhost:5000`.
## API Endpoints
### Authentication Routes
- **POST /api/auth/register**
 - Registers a new user.
 - **Request Body**:
 ```json
 {
 "name": "John Doe",
 "email": "john.doe@example.com",
 "password": "password123"
 }
 ```
- **POST /api/auth/login**
 - Logs in an existing user and returns a JWT token.
 - **Request Body**:
 ```json
 {
 "email": "john.doe@example.com",
 "password": "password123"
 }
 ```
- **POST /api/auth/register-admin**
 - Registers a new admin user (with role `admin`).
 - **Request Body**:
 ```json
 {
 "name": "Admin User",
 "email": "admin@example.com",
 "password": "adminPassword123"
 }
 ```
### Protected Routes
- **GET /api/users**
 - Retrieves a list of all users (Requires authentication).

- **PUT /api/users/:id**
 - Updates user information. (Requires authentication)
 - **Request Body**:
 ```json
 {
 "name": "Updated Name",
 "email": "updated@example.com"
 }
 ```
- **DELETE /api/users/:id**
 - Deletes a user from the database. (Requires authentication)
### Error Handling
- **400 Bad Request**: Missing or invalid fields.
- **401 Unauthorized**: Invalid or missing token.
- **404 Not Found**: Route not found.
- **500 Internal Server Error**: General server errors.
## Testing the API
You can test the API using tools like [Postman](https://www.postman.com/) or
[Insomnia](https://insomnia.rest/).
### Example Test with Postman:
1. **Register a new user**:
 - Method: `POST`
 - URL: `http://localhost:5000/api/auth/register`
 - **Body (JSON)**:
 ```json
 {
 "name": "John Doe",
 "email": "john.doe@example.com",
 "password": "password123"
 }
 ```
2. **Login the user**:
- Method: `POST`
 - URL: `http://localhost:5000/api/auth/login`
 - **Body (JSON)**:
 ```json
 {
 "email": "john.doe@example.com",
 "password": "password123"
 }
 ```
 - Save the JWT token you receive in the response.
3. **Access a protected route** (e.g., `/api/users`):
 - Method: `GET`
 - URL: `http://localhost:5000/api/users`
 - **Headers**:
 ```text
 Authorization: Bearer <your-jwt-token>
 ```
## Deployment
The project is deployed on [Render](https://render.com). After pushing your changes to GitHub,
Render will automatically redeploy your app.
- **Live URL**:
[https://backend-project-x69n.onrender.com](https://backend-project-x69n.onrender.com)
### Deployment Troubleshooting:
1. **502 Bad Gateway**: This error typically occurs due to incorrect environment variables, such as
an incorrect MongoDB URI. Ensure your MongoDB URI is correct and that your database allows
access from all IP addresses or the Render IP.
2. **Module Not Found**: Ensure you have installed all necessary dependencies (`npm install`).
## Troubleshooting
- **502 Bad Gateway**: Often caused by incorrect environment variables or database connection
issues. Double-check your MongoDB URI and ensure that MongoDB Atlas allows connections from
all IPs or from your deployment platform's IP.

- **Cannot find module errors**: Ensure you have all dependencies installed. You can try running
  `npm install` again to fix any missing dependencies.
For more help, visit [Render troubleshooting
documentation](https://render.com/docs/troubleshooting-deploys).
---

