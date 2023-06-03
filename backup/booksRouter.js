/**
 * Books router for handling book-related routes.
 *
 * @project : MI LIBRO
 * @version : 1.0.1
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abinas, Saran, Yasir
 * @created : 2023-05-18 18:32:52
 * @modified : 2023-05-18 18:41:01
 * @editor : Ajayos
 * @file : booksRouter.js
 * @path : Routers/booksRouter.js
 *
 * Description: This file defines the books router for handling book-related routes such as get all books, add a book, update book status, etc.
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abhinas, Saran, Yasir)
 */

const express = require('express');
const router = express.Router();

// Import the books controller
const { booksController } = require('../controllers');

// Get all books route
router.get('/', booksController.getAllBooks);

// Get new bokks route
router.get('/new', booksController.getNewBooks);

// Get a book by ID route
router.get('/:id', booksController.getBookById);

// Add a book route
router.post('/', booksController.addBook);

// Update book status route
router.put('/:id/status', booksController.updateBookStatus);

// Add a comment to a book route
router.post('/:id/comment', booksController.addComment);

// Delete a comment from a book route
router.delete('/:bookId/comment/:commentId', booksController.deleteComment);

module.exports = router;
