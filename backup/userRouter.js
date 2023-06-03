/**
 * User router for handling user-related routes.
 *
 * @project : MI LIBRO
 * @version : 1.0.1
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abhinas, Saran, Yasir
 * @created : 2023-05-18 18:18:05
 * @modified : 2023-05-18 18:20:16
 * @editor : Ajayos
 * @file : userRouter.js
 * @path : Routers/userRouter.js
 *
 * Description: This file defines the user router for handling user-related routes such as registration, login, profile, etc.
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abhinas, Saran, Yasir)
 */

const express = require('express');
const router = express.Router();

// Import the user controller
const { userController } = require('../controllers');

// User login route
router.post('/', userController.login);

// User profile route
router.get('/', userController.getProfile);

// User update profile route
router.put('/:id', userController.updateProfile);

// User delete profile route
router.delete('/:id', userController.deleteProfile);

module.exports = router;