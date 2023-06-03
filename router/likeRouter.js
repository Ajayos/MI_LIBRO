/**
 * Like Router
 *
 * @project : MI LIBRO
 * @version: 1.0.1
 * @link : http://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abinas, Saran, Yasir
 * @created : 2023-05-17 10:14:13
 * @modified : 2023-05-20 14:11:12
 * @editor : Ajayos
 * @file : likeRouter.js
 * @path : /router/likeRouter.js
 *
 * Description: Router for handling like-related routes.
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abinas, Saran, Yasir)
 */

const express = require("express");
const router = express.Router();

const {
	getAllLikes,
	createLike,
	deleteLike,
	getLike,
	getLikesByBookId,
	getLikesByUserId,
	updateLike,
} = require("../controllers/likeController");
const { protectUser, protectAdmin } = require("../middleware/authMiddleware");

// Route: GET /api/v1/likes
router.get("/", getAllLikes);

// Route: GET /api/v1/likes/:id
router.get("/:id", getLike);

// Route: POST /api/v1/likes
router.post("/", protectUser, createLike);

// Route: DELETE /api/v1/likes/:id
router.delete("/:id", protectUser, deleteLike);

// Route: GET /api/v1/likes/bookId
router.get("/book/:id", protectUser, getLikesByBookId);

// Route: GET /api/v1/likes/userId
router.get("/user/:id", protectUser, getLikesByUserId);

// Route: PUT /api/v1/likes/bookId
router.put("/book/:id", protectUser, updateLike);

module.exports = router;
