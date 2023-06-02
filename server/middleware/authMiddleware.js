/**
 * Authentication Middleware
 *
 * @project : MI LIBRO
 * @version : 1.0.1
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abinas, Saran, Yasir
 * @created : 2023-05-18 18:23:36
 * @modified : 2023-05-20 14:25:36
 * @editor : Ajayos
 * @file : authMiddleware.js
 * @path : middleware/authMiddleware.js
 *
 * Description: Middleware to authenticate user or admin requests.
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abinas, Saran, Yasir)
 */
const jwt = require("jsonwebtoken");
const { User, Admin } = require("../Models");
const asyncHandler = require("express-async-handler");

// Authentication middleware for users
const protectUser = asyncHandler(async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      const token = req.headers.authorization.split(" ")[1];

      // Decode the token to get the user id, email, and hashed password
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const { id, email, hashedPassword } = decoded;

      // Find the user based on the decoded id
      const user = await User.findById(id);

      if (user && user.password === hashedPassword) {
        req.user = user;
        req.id = id;
        if(user.access) {
          next();
        } else {
          return res.status(403).send("Access Denied");
        }
        // if(!user.access) return res.status(403).send("Access Denied");
      } else {
        return res.status(401).json({
          error: "Invalid Token",
          message: "Not authorized, token failed",
        });
      }
    } catch (error) {
      return res.status(401).json({
        error: "Invalid Token",
        message: "Not authorized, token failed",
      });
    }
  } else {
    return res.status(401).json({
      error: "Access Denied",
      message: "Not authorized, no token",
    });
  }
});

// Authentication middleware for admins
const protectAdmin = asyncHandler(async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      const token = req.headers.authorization.split(" ")[1];

      // Decode the token to get the user id, email, and hashed password
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const { id, email, hashedPassword } = decoded;

      // Find the admin based on the decoded id
      const admin = await Admin.findById(id);

      if (admin && admin.password === hashedPassword) {
        req.user = admin;
        next();
      } else {
        return res.status(401).json({
          error: "Invalid Token",
          message: "Not authorized, token failed",
        });
      }
    } catch (error) {
      return res.status(401).json({
        error: "Invalid Token",
        message: "Not authorized, token failed",
      });
    }
  } else {
    return res.status(401).json({
      error: "Access Denied",
      message: "Not authorized, no token",
    });
  }
});

const SkipPprotect = asyncHandler(async (req, res, next) => {
        next();
});

module.exports = {
  protectUser,
  protectAdmin,
  SkipPprotect
};
