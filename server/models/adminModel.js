/**
 * Admin Model
 *
 * @project : MI LIBRO
 * @version : 1.0.1
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abinas, Saran, Yasir
 * @created : 2023-05-17 10:19:06
 * @modified : 2023-05-20 13:06:25
 * @editor : Ajayos
 * @file : adminModel.js
 * @path : models/adminModel.js
 *
 * Description: Model for the Admin entity.
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abinas, Saran, Yasir)
 */

// Import the mongoose package
const mongoose = require('mongoose');

/**
 * Admin schema for managing admin data.
 */
const adminSchema = new mongoose.Schema({
  // Define the 'username' field with type String and it is required and should be unique
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // Define the 'name' field with type String
  name: {
    type: String,
  },
  // Define the 'img' field with type String and it is required
  img: {
    type: String,
    required: true,
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
 * @param {String} email - The email id of the admin. (required)
 * @param {String} name - The name of the admin.
 * @param {String} img - The image of the admin. (required)
 * @param {String} password - The password of the admin. (required)
 * @returns {Model} The Admin model.
 */
const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
