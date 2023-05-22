/**
 * User Controller
 *
 * @project : MI LIBRO
 * @version : 1.0.1
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abinas, Saran, Yasir
 * @created : 2023-05-17 10:04:13
 * @modified : 2023-05-20 15:15:30
 * @editor : Ajayos
 * @file : userController.js
 * @path : controllers/userController.js
 *
 * Description: Controller for handling user-related actions.
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abinas, Saran, Yasir)
 */

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const generateAuthToken = require("../lib/generateToken");
const asyncHandler = require("express-async-handler");

/**
 * Controller function for user account creation.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response indicating successful user account creation.
 * @throws {Object} Error object if an error occurs during the account creation process.
 */
exports.createAccount = asyncHandler(async (req, res) => {
  try {
    const {
      email,
      password,
      pic,
      name,
      dob,
      age,
      termsAndConditions,
      phoneNumber,
      place,
      education,
      contactDetails,
    } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user account
    const newUser = new User({
      email,
      password: hashedPassword,
      name,
      pic,
      dob,
      age,
      address,
      termsAndConditions,
      phoneNumber,
      place,
      education,
      contactDetails,
      access: true,
    });
    await newUser.save();

    const userInfo = await User.findOne({ email });
    // Generate and return a token for authentication
    const token = generateAuthToken(userInfo._id);

    res.status(201).json({
      message: "User account created successfully",
      token: token,
      name: name,
      email: email,
      pic: pic,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// Controller function for update password of a user account.
exports.updatePassword = asyncHandler(async (req, res) => {
  try {
    const { userId } = req.params;
    const { password } = req.body;

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    user.password = hashedPassword
    await user.save();

    const userInfo = await User.findOne({ email });
    // Generate and return a token for authentication
    const token = generateAuthToken(userInfo._id);

    res.status(200).json({message: "Password updated successfully"});
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

/**
 * Controller function for editing a user account.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response indicating successful account update.
 * @throws {Object} Error object if an error occurs during the account update process.
 */
exports.editAccount = asyncHandler(async (req, res) => {
  try {
    const { userId } = req.params;
    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await user.save(req.body);

    res.status(200).json({ message: "User account updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

/**
 * Controller function for deleting a user account.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response indicating successful account deletion.
 * @throws {Object} Error object if an error occurs during the account deletion process.
 */
exports.deleteAccount = asyncHandler(async (req, res) => {
  try {
    const { userId } = req.params;

    // Find the user by ID and delete
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User account deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// Controller method to get user by ID
exports.getUserById = asyncHandler(async (req, res) => {
  try {
    const { userId } = req.params;

    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Controller method to update user profile
exports.updateUserProfile = asyncHandler(async (req, res) => {
  try {
    const { userId } = req.params;
    const { pic } = req.body;

    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.pic = pic;
    await user.save();

    return res
      .status(200)
      .json({ message: "User profile updated successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Controller method for count of books rented by user
exports.countBooksRented = asyncHandler(async (req, res) => {
  try {
    const { userId } = req.params;

    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ count: user.booksRented });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Controller method for add count of books rented by user
exports.addBooksRented = asyncHandler(async (req, res) => {
  try {
    const { userId } = req.params;

    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.booksRented = user.booksRented + 1;
    await user.save();

    return res
      .status(200)
      .json({ message: "Books rented count updated successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});
