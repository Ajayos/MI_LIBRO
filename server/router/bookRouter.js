/**
 * Book Router
 *
 * @project : MI LIBRO
 * @version: 1.0.1
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abinas, Saran, Yasir
 * @created : 2023-05-17 10:14:13
 * @modified : 2023-05-20 14:11:12
 * @editor : Ajayos
 * @file : bookRouter.js
 * @path : /router/bookRouter.js
 *
 * Description: Router for handling book-related routes.
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abinas, Saran, Yasir)
 */

const express = require("express");
const router = express.Router();

const { routes } = require("../controllers/bookController");
const { protectUser, protectAdmin } = require("../middleware/authMiddleware");

// Route: GET /api/v1/books
router.get("/", getBook);
