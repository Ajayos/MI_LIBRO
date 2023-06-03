/**
 * Like Controller
 *
 * @project : MI_LIBRO
 * @version: 1.0.1
 * @link : http://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akash, Abinas, Saran, Yasir
 * @created : 2023-05-17 10:14:13
 * @modified : 2023-05-20 14:11:12
 * @editor : Ajayos
 * @file : likeController.js
 * @path : /controllers/likeController.js
 *
 * Description: Controller for handling like-related routes.
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abinas, Saran, Yasir)
 */

const asyncHandler = require("express-async-handler");
const { Like, User,  } = require("../Models");

/**
 *
 * @desc Create a new like
 * @route POST /api/v1/likes
 * @access Private
 * @param {string} bookId - The id of the book
 * @returns {object} - The created like
 */
const createLike = asyncHandler(async (req, res) => {
	console.log(req.user)
	res.send("hi")
	//try {
	//	const bookId = req.body.id;
	//	console.log(bookId);
//
	//	const like = new Like({
	//		book: bookId,
	//		user: req.id,
	//	});
	//	console.log(like);
	//	await like.save();
	//	res.status(200).json({
	//		message: "Like created successfully",
	//	});
	//} catch (error) {
	//	console.error(error);
	//	res.status(500).send("Internal Server Error");
	//}
});

/**
 *
 * @desc Get all the likes of a book
 * @route GET /api/v1/likes
 * @access Public
 * @param {string} bookId - The id of the book
 * @returns {object} - The likes of the book
 */
const getAllLikes = asyncHandler(async (req, res) => {
	try {
		const likes = await Like.findAll();
		return res.status(200).json(likes);
	} catch (error) {
		res.status(500).send("Internal Server Error");
	}
});

/**
 *
 * @desc Get all the likes of a user
 * @route GET /api/v1/likes
 * @access Public
 * @param {string} userId - The id of the user
 * @returns {object} - The likes of the user
 */
const getLike = asyncHandler(async (req, res) => {
	try {
		const like = await Like.findByPk(req.params.id);
		if (!like) {
			res.status(404).send("Like not found");
		}
		res.status(200).json(like);
	} catch (error) {
		res.status(500).send("Internal Server Error");
	}
});

/**
 * @description Delete a like
 * @route DELETE /api/v1/likes/:id
 * @access Private
 * @param {string} id - The id of the like
 * @returns {object} - The deleted like
 */
const deleteLike = asyncHandler(async (req, res) => {
	try {
		const like = await Like.findByPk(req.params.id);
		if (!like) {
			res.status(404).send("Like not found");
		}
		await like.destroy();
		res.status(200).json({
			message: "Like deleted successfully",
		});
	} catch (error) {
		res.status(500).send("Internal Server Error");
	}
});

/**
 * @description Get all the likes of a book
 * @route GET /api/v1/likes/:bookId
 * @access Public
 * @param {string} bookId - The id of the book
 * @returns {object} - The likes of the book
 */
const getLikesByBookId = asyncHandler(async (req, res) => {
	try {
		const likes = await Like.findAll({
			where: {
				bookId: req.params.bookId,
			},
		});
		res.status(200).json(likes);
	} catch (error) {
		res.status(500).send("Internal Server Error");
	}
});

/**
 * @description Get all the likes of a user
 * @route GET /api/v1/likes/:userId
 * @access Public
 * @param {string} userId - The id of the user
 * @returns {object} - The likes of the user
 */
const getLikesByUserId = asyncHandler(async (req, res) => {
	try {
		const likes = await Like.findAll({
			where: {
				userId: req.params.userId,
			},
		});
		res.status(200).json(likes);
	} catch (error) {
		res.status(500).send("Internal Server Error");
	}
});

/**
 * @description Update a like
 * @route PUT /api/v1/likes/:id
 * @access Private
 * @param {string} id - The id of the like
 * @returns {object} - The updated like
 */
const updateLike = asyncHandler(async (req, res) => {
	try {
		const like = await Like.findByPk(req.params.id);

		if (!like) {
			res.status(404).send("Like not found");
		}

		await like.update(req.body);
		res.status(200).json({
			message: "Like updated successfully",
			like: like,
		});
	} catch (error) {
		res.status(500).send("Internal Server Error");
	}
});

module.exports = {
	createLike,
	getAllLikes,
	getLike,
	deleteLike,
	getLikesByBookId,
	getLikesByUserId,
	updateLike,
};

