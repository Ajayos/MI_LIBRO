/**
 * Comment Router
 *
 * @project : MI LIBRO
 * @version: 1.0.1
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abinas, Saran, Yasir
 * @created : 2023-05-17 10:14:13
 * @modified : 2023-05-20 14:11:12
 * @editor : Ajayos
 * @file : commentRouter.js
 * @path : /router/commentRouter.js
 *
 * Description: Router for handling comment-related routes.
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abinas, Saran, Yasir)
 */

const express = require("express");
const router = express.Router();

const { protectUser, protectAdmin } = require("../middleware/authMiddleware");

const { createComment, getAllComments, getComment, updateComment, deleteComment, getAllCommentsOfBook, getAllCommentsOfUser  } = require("../controllers/commentController");

// Route: GET /api/v1/comments
router.post("/", protectUser, createComment);

// Route: GET /api/v1/comments
router.get("/", getAllComments);

// Route: GET /api/v1/comments/:id
router.get("/:id", getComment);

// Route: PUT /api/v1/comments/:id
router.put("/:id", protectUser, updateComment);

// Route: DELETE /api/v1/comments/:id
router.delete("/:id", protectUser, deleteComment);

//  Route: GET /api/v1/comments/user/:id
router.get("/user/:id", protectUser, getAllCommentsOfUser);

//  Route: GET /api/v1/comments/book/:id
router.get("/book/:id", protectUser, getAllCommentsOfBook);

module.exports = router;