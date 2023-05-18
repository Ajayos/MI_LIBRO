/**
 * Module for managing user data in the database.
 *
 * @project : MI LIBRO
 * @version : 1.0.1
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abhinas, Saran, Yasir
 * @created : 2023-05-17 10:14:13
 * @modified : 2023-05-18 18:11:12
 * @editor : Ajayos
 * @file : User.js
 * @path : Models/User.js
 *
 * Description: This module exports a Mongoose model for managing user data in the database. It defines a user schema
 * with fields such as username, password, name, place, age, email, education, contact details, terms and conditions.
 * The User model allows adding, updating, or deleting user data from the database.
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abhinas, Saran, Yasir)
 */


// Import the mongoose package
const mongoose = require('mongoose');

/**
 * User schema for managing user data.
 */
const userSchema = new mongoose.Schema({
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
  // Define the 'name' field with type String and it is required
  name: {
    type: String,
    required: true,
  },
  // Define the 'place' field with type String and it is required
  place: {
    type: String,
    required: true,
  },
  // Define the 'age' field with type Number and it is required
  age: {
    type: Number,
    required: true,
  },
  // Define the 'email' field with type String, it is required, and should be unique
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // Define the 'education' field with type String and it is required
  education: {
    type: String,
    required: true,
  },
  // Define the 'contactDetails' field with type String and it is required
  contactDetails: {
      type: String,
      required: true,
  },
  // Define the 'termsAndConditions' field with type Boolean and it is required
  termsAndConditions: {
    type: Boolean,
    required: true,
  },
  // Define the 'access' field with type Boolean and it is required
  access: {
    type: Boolean,
    required: true,
  },
});

/**
 * Create a User model using the user schema.
 *
 * @param {String} username - The username of the user. (required)
 * @param {String} password - The password of the user. (required)
 * @param {String} name - The name of the user. (required)
 * @param {String} place - The place of the user. (required)
 * @param {Number} age - The age of the user. (required)
 * @param {String} email - The email of the user. (required)
 * @param {String} education - The education of the user. (required)
 * @param {Object} contactDetails - The contact details of the user. (required)
 * @param {String} contactDetails.phoneNumber - The phone number of the user. (required)
 * @param {String} contactDetails.emailId - The email ID of the user. (required)
 * @param {Boolean} termsAndConditions - The acceptance status of terms and conditions by the user. (required)
 * @param {Boolean} access - The access status of the user. (required)
 *
 * @returns {Model} The User model.
 */
const User = mongoose.model('User', userSchema);

// Export the User model
module.exports = User;
