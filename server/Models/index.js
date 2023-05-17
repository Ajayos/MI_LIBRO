/**
 * Module for exporting the models and schemas.
 *
 * @project : MI LIBRO
 * @version : 1.0.1
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abhinas, Saran, Yasir
 * @created : 2023-05-17 10:5:56
 * @modified : 2023-05-17 12:15:36
 * @editor : Ajayos
 * @file : index.js
 * @path : Models/index.js
 *
 * Description: This module exports the Admin, User, and Book models and schemas for managing admin, user, and book data in the database.
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abhinas, Saran, Yasir)
 */

// Import the necessary models and schemas
const connectDB = require('./Database');
const Admin = require('./Admin');
const User = require('./User');
const Book = require('./Books');

// Export the models and schemas
module.exports = {
  connectDB, // // Function to connect to the database
  Admin, // Admin model for managing admin data
  User, // User model for managing user data
  Book, // Book model for managing book data
  File, // File model for managing file data
};
