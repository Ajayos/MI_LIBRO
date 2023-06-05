/**
 * Admin Functions.
 *
 * @project : MI LIBRO
 * @version : 1.0.2
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abinas, Saran, Yasir
 * @created : 2023-05-17 10:04:13
 * @modified : 2023-06-03 21:15:30
 * @editor : Ajayos
 * @file : Admin.js
 * @path : /lib/Admin.js
 *
 * Description: This file define the Admin control for connect to database and authentications
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abinas, Saran, Yasir)
 *
 */

// Import dependencies
const { Admin, User, Book } = require("../Models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const generateAuthToken = require("./generateToken");
exports.login = async (data) => {
  try {
    // Destructure the data object to get the required properties
    const { email, password } = data;

    // Find the Admin by email
    const admin = await Admin.findOne({ email });

    // If admin not found, return error
    if (!admin) {
      return {
        status: 404,
        message: "admin not found",
        error: true,
        data: undefined,
      };
    }

    // Compare the provided password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, admin.password);
    // If passwords don't match, return error
    if (!isMatch) {
      return {
        status: 401,
        error: true,
        message: "Invalid credentials",
        data: undefined,
      };
    }

    // Generate and return a token for authentication
    const token = generateAuthToken(admin);

    return {
      status: 200,
      error: false,
      message: undefined,
      data: { token, admin },
    };
  } catch (error) {
    return {
      status: 500,
      error: true,
      message: "Internal server error",
      data: undefined,
    };
  }
};

exports.createAccount = async (data) => {
  try {
    // Destructure the data object to get the required properties
    const { email, password, pic, name } = data;

    // Check if the Admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return {
        status: 409,
        error: true,
        message: "Admin already exists",
        data: undefined,
      };
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Create the new user account
    const newAdmin = new Admin({
      email,
      password: hashedPassword,
      name,
      pic,
    });
    await newAdmin.save();

    const admin_ = await Admin.findOne({ email });

    // Generate and return a token for authentication
    const token = generateAuthToken(admin_);

    return {
      status: 201,
      error: false,
      message: undefined,
      data: {
        token,
        name,
        email,
        pic,
      },
    };
  } catch (error) {
    return {
      status: 500,
      error: true,
      message: "Internal server error",
      data: undefined,
    };
  }
};

exports.dashBoard = async () => {
  try {
    const users = await User.find();
    const books = await Book.find();
    const requestedBooks = await Promise.all(
      books
        .filter((book) => book.request)
        .map(async (book) => {
          const requestedBy = book.request;
          const user = await User.findById(requestedBy);
          return {
            book: book,
            requestedBy: user,
          };
        })
    );

    return {
      status: 200,
      error: false,
      message: undefined,
      data: { user: users.length, books: books.length, req: requestedBooks.length },
    };
  } catch (error) {
    return {
      status: 500,
      error: true,
      message: "Internal server error",
      data: undefined,
    };
  }
};
