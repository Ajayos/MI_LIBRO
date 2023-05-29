/**
 * Admin Router
 *
 * @project : MI LIBRO
 * @version : 1.0.1
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abinas, Saran, Yasir
 * @created : 2023-05-18 18:23:36
 * @modified : 2023-05-20 14:30:42
 * @editor : Ajayos
 * @file : adminRouter.js
 * @path : router/adminRouter.js
 *
 * Description: Router for handling admin-related routes.
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abinas, Saran, Yasir)
 */

const express = require("express");
const router = express.Router();
const { login, createAccount, getDashboardData, getUsersData } = require("../controllers/adminController");
const { protectUser, protectAdmin, SkipPprotect } = require("../middleware/authMiddleware");

// Route: POST /api/v1/admins
router.post("/login", login);

// Route: POST /api/v1/admins
router.post("/", createAccount);

router.post("/dashboard", protectAdmin, getDashboardData)

router.get("/users",  getUsersData)
module.exports = router;
