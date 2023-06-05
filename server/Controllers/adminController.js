/**
 * Admin controller for handling admin-related operations.
 *
 * @project : MI LIBRO
 * @version : 1.0.2
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abinas, Saran, Yasir
 * @created : 2023-05-17 10:04:13
 * @modified : 2023-06-03 21:15:30
 * @editor : Ajayos
 * @file : adminController.js
 * @path : /Controllers/adminController.js
 *
 * Description: This file define the Admin control for connect to database and authentications
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abinas, Saran, Yasir)
 *
 */

// Import dependencies

const asyncHandler = require("express-async-handler");
const Admin = require("../lib/Admin");
const User = require("../lib/User");
const Book = require("../lib/Book");

/**
 * Controller function to handle admin login.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The response object.
 * @throws {Error} If an error occurs while processing the request.
 */

exports.login = asyncHandler(async (req, res) => {
  try {
    const { status, message, error, data } = await Admin.login(req.body);

    if (error) {
      return res.status(status).json({ error: true, message });
    }

    return res.status(status).json(data);
  } catch (error) {
    return res
      .status(500)
      .json({ error: true, message: "Internal server error" });
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
exports.createAccount = asyncHandler(async (req, res) => {
  try {
    const { status, message, error, data } = await Admin.createAccount(
      req.body
    );

    if (error) {
      return res.status(status).json({ error: true, message });
    }

    return res.status(status).json(data);
  } catch (error) {
    return res
      .status(500)
      .json({ error: true, message: "Internal server error" });
  }
});

/**
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response containing the output.
 * @throws {Object} Error object if an error occurs during the process.
 */

exports.editAccount = asyncHandler(async (req, res) => {
  try {
    const { status, message, error, data } = await User.editAccount(req.body);

    if (error) {
      return res.status(status).json({ error: true, message });
    }

    return res.status(status).json(data);
  } catch (error) {
    return res
      .status(500)
      .json({ error: true, message: "Internal server error" });
  }
});

/**
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response containing the output.
 * @throws {Object} Error object if an error occurs during the process.
 */

exports.updateUserAccess = asyncHandler(async (req, res) => {
  try {
    const { status, message, error, data } = await User.editAccess({userID: req.body.id, access: req.body.access});

    if (error) {
      return res.status(status).json({ error: true, message });
    }

    return res.status(status).json(data);
  } catch (error) {
    return res
      .status(500)
      .json({ error: true, message: "Internal server error" });
  }
});

/**
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response containing the output.
 * @throws {Object} Error object if an error occurs during the process.
 */

exports.deleteAccount = asyncHandler(async (req, res) => {
  try {
    const { status, message, error, data } = await User.deleteAccount({userId: req.params.id});

    if (error) {
      return res.status(status).json({ error: true, message });
    }

    return res.status(status).json(data);
  } catch (error) {
    return res
      .status(500)
      .json({ error: true, message: "Internal server error" });
  }
});

/**
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response containing the output.
 * @throws {Object} Error object if an error occurs during the process.
 */

exports.dashBoard = asyncHandler(async (req, res) => {
  try {
    const { status, message, error, data } = await Admin.dashBoard();

    if (error) {
      return res.status(status).json({ error: true, message });
    }

    return res.status(status).json(data);
  } catch (error) {
    return res
      .status(500)
      .json({ error: true, message: "Internal server error" });
  }
});

/**
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response containing the output.
 * @throws {Object} Error object if an error occurs during the process.
 */

exports.getAllUsers = asyncHandler(async (req, res) => {
  try {
    const { status, message, error, data } = await User.getAllUsers();

    if (error) {
      return res.status(status).json({ error: true, message });
    }

    return res.status(status).json(data);
  } catch (error) {
    return res
      .status(500)
      .json({ error: true, message: "Internal server error" });
  }
});

/**
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response containing the output.
 * @throws {Object} Error object if an error occurs during the process.
 */

exports.getUserData = asyncHandler(async (req, res) => {
  try {
    const { status, message, error, data } = await User.getUserData({userId: req.body.id});

    if (error) {
      return res.status(status).json({ error: true, message });
    }

    return res.status(status).json(data);
  } catch (error) {
    return res
      .status(500)
      .json({ error: true, message: "Internal server error" });
  }
});


/**
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response containing the output.
 * @throws {Object} Error object if an error occurs during the process.
 */

exports.AllBooks = asyncHandler(async (req, res) => {
  try {
    const { status, message, error, data } = await Book.AllBooks();

    if (error) {
      return res.status(status).json({ error: true, message });
    }

    return res.status(status).json(data);
  } catch (error) {
    return res
      .status(500)
      .json({ error: true, message: "Internal server error" });
  }
});

/**
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response containing the output.
 * @throws {Object} Error object if an error occurs during the process.
 */

exports.GetBook = asyncHandler(async (req, res) => {
  try {
    const { status, message, error, data } = await User.GetBook(req.body);

    if (error) {
      return res.status(status).json({ error: true, message });
    }

    return res.status(status).json(data);
  } catch (error) {
    return res
      .status(500)
      .json({ error: true, message: "Internal server error" });
  }
});