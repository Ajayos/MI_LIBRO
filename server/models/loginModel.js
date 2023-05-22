/**
 * Login Model
 *
 * @project : MI LIBRO
 * @version : 1.0.1
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abinas, Saran, Yasir
 * @created : 2023-05-17 10:14:13
 * @modified : 2023-05-20 14:11:12
 * @editor : Ajayos
 * @file : loginModel.js
 * @path : models/loginModel.js
 *
 * Description: Model for the Login entity.
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abinas, Saran, Yasir)
 */

// Import the mongoose package
const mongoose = require("mongoose");

/**
 * Login schema for managing login data.
 */
const loginSchema = new mongoose.Schema({
  // Define the 'user' field with type ObjectId and it is required
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  // Define the 'lastLogin' field with type Date and default value Date.now
  lastLogin: {
    type: Date,
    default: Date.now
  },
  // Define the 'token' field with type String and it is required
  token: {
    type: String,
    required: true
  },
  // Define the 'status' field with type String and default value 'inactive' (possible values: 'active', 'inactive', 'blocked', 'deleted')
  status: {
    type: String,
    default: 'inactive',
    enum: ['active', 'inactive', 'blocked', 'deleted']
   },
});

// Export the Login model
module.exports = mongoose.model('Login', loginSchema);
