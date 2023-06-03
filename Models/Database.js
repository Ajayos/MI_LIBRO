/**
 * Module for connecting to the MongoDB database using Mongoose.
 *
 * @project : MI LIBRO
 * @version : 1.0.1
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abinas, Saran, Yasir
 * @created : 2023-05-17 10:11:19
 * @modified : 2023-05-17 10:14:10
 * @editor : Ajayos
 * @file : Database.js
 * @path : models/Database.js
 *
 * Description: This module exports a function to connect to the MongoDB database using Mongoose.
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abinas, Saran, Yasir)
 */

// Import the necessary dependencies
const mongoose = require("mongoose");
const nodelog = require('@ajayos/nodelog');
const colors = require("colors");

/**
 * Define a function to connect to the MongoDB database.
 *
 * @param {string} url - The MongoDB URL with username and password. (required)
 */
const connectDB = async (url) => {
  // Exit the process with a non-zero status code if the URL is not provided
  if (!url) {
    log('MongoDB URL not provided'.red.bold);
    process.exit();
  }

  try {
    // Use Mongoose to connect to the database with the provided URL
    const conn = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Log a message indicating that the connection was successful
    log(`MongoDB Connected`.cyan.underline);
  } catch (error) {
    // Log an error message if the connection failed
    log(`Error: ${error.message}`.red.bold);
    // Exit the process with a non-zero status code
    process.exit();
  }
};

// Export the connectDB function
module.exports = connectDB;
