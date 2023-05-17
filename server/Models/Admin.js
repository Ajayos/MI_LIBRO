/**
 * Module for managing admin data in the database.
 *
 * @project : MI LIBRO
 * @version : 1.0.1
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abhinas, Saran, Yasir
 * @created : 2023-05-17 10:19:06
 * @modified : 2023-05-17 12:06:25
 * @editor : Ajayos
 * @file : Admin.js
 * @path : Models/Admin.js
 * 
 * Description : This module exports a Mongoose model for managing admin data in the database. It defines an admin schema
 * with fields such as username and password. The Admin model allows adding, updating, or deleting admin data from the database.
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abhinas, Saran, Yasir)
 */

// Import the mongoose package
const mongoose = require('mongoose');

/**
 * Admin schema for managing admin data.
 */
const adminSchema = new mongoose.Schema({
  // Define the 'username' field with type String and it is required and should be unique
  username: {
    type: String,
    required: true,
    unique: true,
  },
  // Define the 'password' field with type String and it is required
  password: {
    type: String,
    required: true,
  },
});

/**
 * Create an Admin model using the admin schema.
 *
 * @param {String} username - The username of the admin. (required)
 * @param {String} password - The password of the admin. (required)
 * @returns {Model} The Admin model.
 */
const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
