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

const express = require('express');
const router = express.Router();
const { login, createAccount } = require('../controllers/userController');

// Route: GET /api/v1/users
router.get('/', login);

// Route: POST /api/v1/users
router.post("/", createAccount);

// Route: PUT /api/v1/users/:id
router.put('/:id', updateUser);

// Route: DELETE /api/v1/users/:id
router.delete('/:id', deleteUser);
