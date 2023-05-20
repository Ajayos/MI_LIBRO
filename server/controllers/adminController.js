/**
 * Admin controller for handling admin-related operations.
 *
 * @project : MI LIBRO
 * @version : 1.0.1
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abinas, Saran, Yasir
 * @created : 2023-05-17 10:04:13
 * @modified : 2023-05-17 21:15:30
 * @editor : Ajayos
 * @file : adminController.js
 * @path : controllers/adminController.js
 *
 * Description: This file define the Admin control for connect to database and authentications
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abinas, Saran, Yasir)
 *
 */

// Import dependencies


const { Admin } = require('../Models');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");




/**
 * Controller function to handle admin login.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The response object.
 * @throws {Error} If an error occurs while processing the request.
 */
exports.login = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the admin by username
    const admin = await Admin.findOne({ email });

    // If admin not found, return error
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    // Compare the provided password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, admin.password);

    // If passwords don't match, return error
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate and return a token for authentication
    const token = generateAuthToken(admin._id);

    res.status(200).json({ token: token, name: admin.name, email: admin.email  });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});


/**
 * Controller function for admin account creation.
 * this function only for devlopment time use now work on production
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response indicating successful admin account creation.
 * @throws {Object} Error object if an error occurs during the account creation process.
 */
exports.createAccount = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    // Check if the admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(409).json({ message: 'Admin already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new admin account
    const newAdmin = new Admin({ email, password: hashedPassword });
    await newAdmin.save();

    res.status(201).json({ message: 'Admin account created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};