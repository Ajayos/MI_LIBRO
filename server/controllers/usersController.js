/**
 * User controller for managing user-related operations.
 *
 * @project : MI LIBRO
 * @version : 1.0.1
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abhinas, Saran, Yasir
 * @created : 2023-05-17 10:04:13
 * @modified : 2023-05-17 21:15:30
 * @editor : Ajayos
 * @file : usersController.js
 * @path : controllers/usersController.js
 *
 * Description: This file define the users control for connect to database and authentications
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abhinas, Saran, Yasir)
 *
 */

// Import dependencies
const { User } = require('../Models');
const bcrypt = require('bcrypt');

/**
 * Controller function for user login.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response containing the authentication token.
 * @throws {Object} Error object if an error occurs during the login process.
 */
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    // If user not found, return error
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare the provided password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);

    // If passwords don't match,  2return error
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate and return a token for authentication
    const token = generateAuthToken(user);

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};


/**
 * Controller function for user account creation.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response indicating successful user account creation.
 * @throws {Object} Error object if an error occurs during the account creation process.
 */
exports.createAccount = async (req, res) => {
  try {
    const { email, password, username, phono, address,  } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user account
    const newUser = new User({ email, password: hashedPassword, username, phono, address,  });
    await newUser.save();

    res.status(201).json({ message: 'User account created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

/**
 * Controller function for editing a user account.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response indicating successful account update.
 * @throws {Object} Error object if an error occurs during the account update process.
 */
exports.editAccount = async (req, res) => {
  try {
    const { userId } = req.params;
    const { email, password } = req.body;

    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update the user's email and password
    user.email = email;
    user.password = password;
    await user.save();

    res.status(200).json({ message: 'User account updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

/**
 * Controller function for deleting a user account.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response indicating successful account deletion.
 * @throws {Object} Error object if an error occurs during the account deletion process.
 */
exports.deleteAccount = async (req, res) => {
  try {
    const { userId } = req.params;

    // Find the user by ID and delete
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User account deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};


// Edit user
exports.editUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { name, email } = req.body;

    // Find the user by ID
    const user = await User.findById(userId);

    // If user not found, return error
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update the user's name and email
    user.name = name;
    user.email = email;

    // Save the updated user
    await user.save();

    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Delete user
exports.deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;

    // Delete the user by ID
    await User.findByIdAndDelete(userId);

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Block user
exports.blockUser = async (req, res) => {
  try {
    const { userId } = req.params;

    // Find the user by ID
    const user = await User.findById(userId);

    // If user not found, return error
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Set the user's status as blocked
    user.status = 'blocked';

    // Save the updated user
    await user.save();

    res.status(200).json({ message: 'User blocked successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get user's books information
exports.getUserBooks = async (req, res) => {
  try {
    const { userId } = req.params;

    // Find the user by ID and populate the books field
    const user = await User.findById(userId).populate('books');

    // If user not found, return error
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ books: user.books });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Track user's online status and last accessed time
const onlineUsers = new Map();

// Middleware to track user's online status and last accessed time
exports.trackUserOnlineStatus = (req, res, next) => {
  const { userId } = req.params;

  // Store user's online status and last accessed time
  onlineUsers.set(userId, {
    online: true,
    lastAccessed: new Date(),
  });

  next();
};

// Middleware to check if user is blocked
exports.checkUserBlocked = (req, res, next) => {
  const { userId } = req.params;

  // Check if user is blocked
  const user = onlineUsers.get(userId);
  if (user && user.status === 'blocked') {
    return res.status(403).json({ message: 'Access blocked' });
  }

  next();
};





const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");

// Controller method for user signup
const signup = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Check if the user already exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Create a new user
  const user = await User.create({
    name,
    email,
    password: bcrypt.hashSync(password, 10),
  });

  if (user) {
    // Generate a JWT token
    const token = generateToken(user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// Controller method for user login
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Find the user by email
  const user = await User.findOne({ email });

  if (user && bcrypt.compareSync(password, user.password)) {
    // Generate a JWT token
    const token = generateToken(user._id);
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// Helper function to generate a JWT token
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET)
};

// Other controller methods...

module.exports = {
  signup,
  login,
  // Other controller methods...
};
