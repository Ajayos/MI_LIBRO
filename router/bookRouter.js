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

const {
	createBook,
	getAllBooks,
	commentBook,
	deleteBook,
	editBook,
	deleteComment,
	changeStatus,
	getAllBookInfo,
	getAllBooksByUser,
	getBook,
	removeRequestBook,
	likeBook,
	reqBook,
	rentBook,
	returnBook,
	searchBookByAuthor,
	requestBook,
	searchBook,
	searchBookByGenre,
	unLikeBook,
} = require("../controllers/bookController");
const { protectUser, protectAdmin } = require("../middleware/authMiddleware");

// Route: GET /api/v1/books
router.get("/", getAllBooks);

// Route: POST /api/v1/books/admin
router.post("/admin", protectAdmin, getAllBooks);

// Route: GET /api/v1/books/:id
router.get("/:id", getBook);

//router.get("/", getBook);
router.post("/", protectAdmin, createBook);

// Route: PUT /api/v1/books/:id
router.put("/", protectAdmin, editBook);

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
