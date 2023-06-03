/**
 * User Model
 *
 * @project : MI LIBRO
 * @version : 1.0.1
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abinas, Saran, Yasir
 * @created : 2023-05-17 10:14:13
 * @modified : 2023-05-20 14:11:12
 * @editor : Ajayos
 * @file : userModel.js
 * @path : /models/userModel.js
 *
 * Description: Model for the User entity.
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abinas, Saran, Yasir)
 */

// Import the mongoose package
const mongoose = require("mongoose");

/**
 * User schema for managing user data.
 */
const userSchema = new mongoose.Schema(
  {
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
    // Define the 'phoneNumber' field with type String and it is required, and should be unique
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    // Define the 'dob' field with type Date and it is required
    dob: {
      type: String,
      required: true,
    },
    // Define the 'pic' field with type String and it is required
    pic: {
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
    // Define the 'access' field with type Boolean and it is required
    access: {
      type: Boolean,
      default: true,
    },
    // Define the 'booksRented' field with type Number and default value 0
    booksRented: {
      type: Number,
      default: 0,
    },
    // Define the 'created' field with type Date and default value Date.now
    created: {
      type: Date,
      default: Date.now,
    },
    // Define the 'updated' field with type Date and default value Date.now
    updated: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: {
      createdAt: "created",
      updatedAt: "updated",
    },
  }
);

/**
 * Create a User model using the user schema.
 *
 * @param {String} password - The password of the user. (required)
 * @param {String} name - The name of the user. (required)
 * @param {String} place - The place of the user. (required)
 * @param {Number} age - The age of the user. (required)
 * @param {String} email - The email of the user. (required)
 * @param {Date} dob - The date of birth of the user. (required)
 * @param {Buffer} pic - The profile picture of the user. (default null)
 * @param {Number} phoneNumber - The phone no of the user. (require)
 * @param {String} education - The education of the user. (required)
 * @param {Object} contactDetails - The contact details of the user. (required)
 * @param {String} contactDetails.phoneNumber - The phone number of the user. (required)
 * @param {String} contactDetails.emailId - The email ID of the user. (required)
 * @param {Boolean} termsAndConditions - The acceptance status of terms and conditions by the user. (required)
 * @param {Boolean} access - The access status of the user. (required)
 * @param {Number} booksRented - The number of how many books rented. (default 0)
 * @param {Date} created - The date when the user was created. (default Date.now)
 * @param {Date} updated - The date when the user was updated. (default Date.now)
 *
 * @returns {Model} The User model.
 */
const User = mongoose.model("User", userSchema);

// Export the User model
module.exports = User;
