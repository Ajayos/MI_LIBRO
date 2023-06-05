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
const Admin = require("../controllers/adminController");
const { protectUser, protectAdmin, } = require("../middleware/authMiddleware");

// Route: POST /api/v1/admins
router.post("/login", Admin.login);

// Route: POST /api/v1/admins
router.post("/new", Admin.createAccount);

router.delete("/user/delete/:id", protectAdmin, Admin.deleteAccount);

router.put("/user/access", protectAdmin, Admin.updateUserAccess);

router.put("/user", protectAdmin, Admin.editAccount);

router.post("/dashboard", protectAdmin, Admin.dashBoard);

router.get("/users", protectAdmin, Admin.getAllUsers);

router.get("/users/:id", protectAdmin, Admin.getUserData);

router.get("/books", protectAdmin, Admin.AllBooks)

router.get("/books/:id", protectAdmin, Admin.getBook)

router.post("/books", protectAdmin, Admin.createBook)

router.put("/books", protectAdmin, Admin.updateBook)




module.exports = router;
