/**
 * Router index file.
 *
 * @project : MI LIBRO
 * @version : 1.0.1
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abinas, Saran, Yasir
 * @created : 2023-05-17 10:04:13
 * @modified : 2023-05-17 21:15:30
 * @editor : Ajayos
 * @file : index.js
 * @path : routers/index.js
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
const booksRouter = require("./bookRouter");

// Set up routes
router.use("/admins", adminRouter);
router.use("/users", userRouter);
router.use("/books", booksRouter);

// Export router
module.exports = router;
