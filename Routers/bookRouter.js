/**
 * Book Router
 *
 * @project : MI LIBRO
 * @version: 1.0.2
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abinas, Saran, Yasir
 * @created : 2023-05-17 10:14:13
 * @modified : 2023-05-06 14:11:12
 * @editor : Ajayos
 * @file : bookRouter.js
 * @path : /Routers/bookRouter.js
 *
 * Description: Router for handling book-related routes.
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abinas, Saran, Yasir)
 */

const express = require("express");
const router = express.Router();
const { protectUser, protectAdmin } = require("../middleware/authMiddleware");
//const Book = require("../Controllers/bookController");

// Route: GET /api/v1/books
router.get("/", Book.getAllBooks);

// Route: POST /api/v1/books/admin
router.post("/admin", protectAdmin, Book.getAllBooks);

// Route: GET /api/v1/books/:id
router.get("/:id", Book.getBook);

//router.get("/", getBook);
router.post("/", protectAdmin, Book.createBook);

// Route: PUT /api/v1/books/:id
router.put("/", protectAdmin, Book.editBook);

// Route: DELETE /api/v1/books/:id
router.delete("/:id", protectAdmin, deleteBook);

// Route: PUT /api/v1/books/:id/comment
router.put("/:id/comment", protectUser, commentBook);

// Route: DELETE /api/v1/books/:id/comment
router.delete("/:id/comment", protectAdmin, deleteComment);

// Route: PUT /api/v1/books/:id/status
router.put("/:id/status", protectAdmin, changeStatus);

// Route: GET /api/v1/books/:id/info
router.get("/:id/info", protectAdmin, getAllBookInfo);

// Route: GET /api/v1/books/:id/like
router.get("/:id/like", protectUser, likeBook);

// Route: GET /api/v1/books/:id/request
router.get("/:id/request", protectUser, reqBook);

// Route: GET /api/v1/books/:id/rent
router.get("/:id/rent", protectUser, rentBook);

// Route: GET /api/v1/books/:id/return
router.get("/:id/return", protectUser, returnBook);

// Route: GET /api/v1/books/:id/search
router.get("/:id/search", protectUser, searchBook);

// Route: GET /api/v1/books/:id/search/author
router.get("/:id/search/author", protectUser, searchBookByAuthor);

// Route: GET /api/v1/books/:id/search/genre
router.get("/:id/search/genre", protectUser, searchBookByGenre);

// Route: GET /api/v1/books/:id/unlike
router.get("/:id/unlike", protectUser, unLikeBook);

// Route: GET /api/v1/books/:id/request
router.get("/:id/request", protectUser, requestBook);

module.exports = router;