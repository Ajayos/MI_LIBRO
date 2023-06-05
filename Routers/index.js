/**
 * Router index file.
 *
 * @project : MI LIBRO
 * @version : 1.0.2
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abinas, Saran, Yasir
 * @created : 2023-05-17 10:04:13
 * @modified : 2023-05-17 21:15:30
 * @editor : Ajayos
 * @file : index.js
 * @path : /Routers/index.js
 *
 * Description: This file serves as the index file for the Routers folder. It imports and exports the router modules.
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abinas, Saran, Yasir)
 */

// Import dependencies
const express = require("express");
const router = express.Router();

// Import individual router modules
const adminRouter = require("./adminRouter");
const userRouter = require("./userRouter");
//const booksRouter = require("./bookRouter");
const publicRouter = require("./publicRouter");

// Set up routes
router.use("/api/v1/admins", adminRouter);
router.use("/api/v1/users", userRouter);
//router.use("/api/v1/books", booksRouter);
router.use("/public", publicRouter)

// Export router
module.exports = router;
