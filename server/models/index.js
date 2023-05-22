/**
 * Module for exporting the models and schemas.
 *
 * @project : MI LIBRO
 * @version : 1.0.1
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abinas, Saran, Yasir
 * @created : 2023-05-17 10:5:56
 * @modified : 2023-05-17 12:15:36
 * @editor : Ajayos
 * @file : index.js
 * @path : models/index.js
 *
 * Description: This module exports the Admin, User, and Book models and schemas for managing admin, user, and book data in the database.
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abinas, Saran, Yasir)
 */

// Import the necessary models and schemas
const connectDB = require('./Database');
const Admin = require('./adminModel');
const User = require('./userModel');
const Book = require('./bookModel');
const Rental = require('./rentalModel');
const Like = require('./likeModel');
const Comment = require('./commentModel');
const login = require('./loginModel');

// Export the models and schemas
module.exports = {
  connectDB, // Function to connect to the database
  Admin, // Admin model for managing admin data
  User, // User model for managing user data
  Book, // Book model for managing book data
  Rental, // Rental model for managing rental data
  Like, // Like model for managing like data
  Comment, // Comment model for managing comment data
  login, // Login model for managing login data
};
