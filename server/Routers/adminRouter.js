/**
 * Admin Router
 *
 * @project : MI LIBRO
 * @version : 1.0.2
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abinas, Saran, Yasir
 * @created : 2023-05-18 18:23:36
 * @modified : 2023-06-03 14:30:42
 * @editor : Ajayos
 * @file : adminRouter.js
 * @path : /Router/adminRouter.js
 *
 * Description: Router for handling admin-related routes.
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abinas, Saran, Yasir)
 */

const express = require("express");
const router = express.Router();
const { login, createAccount, getDashboardData, getUsersData } = require("../Controllers/adminController");
const { protectUser, protectAdmin, SkipPprotect } = require("../middleware/authMiddleware");
const { getAllBooks } = require("../Controllers/bookController");

// Route: POST /api/v1/admins
router.post("/login", login);

// Route: POST /api/v1/admins
router.post("/new", createAccount);

router.post("/dashboard", protectAdmin, getDashboardData)

router.get("/users", protectAdmin, getUsersData)

router.get("/books", protectAdmin, getAllBooks)

module.exports = router;

