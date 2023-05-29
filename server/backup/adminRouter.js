/**
 * Admin router for handling admin-related routes.
 *
 * @project : MI LIBRO
 * @version : 1.0.1
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abhinas, Saran, Yasir
 * @created : 2023-05-18 18:23:36
 * @modified : 2023-05-18 18:30:42
 * @editor : Ajayos
 * @file : adminRouter.js
 * @path : Routers/adminRouter.js
 *
 * Description: This file defines the admin router for handling admin-related routes such as login, dashboard, settings, etc.
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abhinas, Saran, Yasir)
 */

const express = require('express');
const router = express.Router();

// Import the admin controller
const { adminController } = require('../controllers');

// Admin login route
router.get('/', adminController.login);


module.exports = router;
