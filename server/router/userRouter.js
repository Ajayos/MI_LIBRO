/**
 * User Router
 *
 * @project : MI LIBRO
 * @version: 1.0.1
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abinas, Saran, Yasir
 * @created : 2023-05-17 10:14:13
 * @modified : 2023-05-20 14:11:12
 * @editor : Ajayos
 * @file : userRouter.js
 * @path : /router/userRouter.js
 *
 * Description: Router for handling user-related routes.
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abinas, Saran, Yasir)
 */

const express = require("express");
const router = express.Router();
const {
	login,
	createAccount,
	editAccount,
	deleteAccount,
	updatePassword,
	updateUserProfile,
	forgotPassword,
	getUserById,
	changeAccess,
	countBooksRented,
	addBooksRented,
} = require("../controllers/userController");
const { protectUser, protectAdmin } = require("../middleware/authMiddleware");

// Route: GET /api/v1/users
router.get("/", login);

// Route: POST /api/v1/users
router.post("/", createAccount);

// Route: PUT /api/v1/users/:id
router.put("/:id", protectUser, editAccount);

// Route: DELETE /api/v1/users/:id
router.delete("/:id", protectAdmin, deleteAccount);

// Route: PUT /api/v1/users/forgotPassword
router.put("/forgotPassword", forgotPassword);

// Route: PUT /api/v1/users/changePassword
router.put("/changePassword", protectUser, updatePassword);

// Route: PUT /api/v1/users/profile
router.put("/profile", protectUser, updateUserProfile);

// Route: GET /api/v1/users/:id
router.get("/:id", protectAdmin, getUserById);

// Route: PUT /api/v1/users/access
router.put("/access", protectAdmin, changeAccess);

// Route: GET /api/v1/users/rent
router.get("/rent", protectUser, countBooksRented);

// Route: PUT /api/v1/users/rent
router.put("/rent", protectUser, addBooksRented);
