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

const express = require('express');
const router = express.Router();
const  { login, createAccount}= require('../controllers/adminController');


// Route: POST /api/v1/admins
router.get('/', login);

// Route: POST /api/v1/admins
router.post("/", createAccount);



// Route: GET /api/v1/admins/users
router.get('/users', getAllUsers);

// Route: DELETE /api/v1/admins/users/:id
router.delete('/users/:id', deleteUser);

// Route: PUT /api/v1/admins/books/:id
router.put('/books/:id', updateBookStatus);

// Route: POST /api/v1/admins/books
router.post('/books', createBook);

module.exports = router;
