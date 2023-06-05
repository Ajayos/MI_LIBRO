/**
 * Comment Controller
 *
 * @project : MI LIBRO
 * @version: 1.0.1
 * @link : http://github.com/Ajayos/MI_LIBRO
 * @authour : Ajay, Akarsh, Abinas, Saran, Yasir
 * @created : 2023-05-17 10:14:13
 * @modified : 2023-05-20 14:11:12
 * @editor : Ajayos
 * @file : commentController.js
 * @path : /controllers/commentController.js
 *
 * Description: Controller for handling comment-related routes.
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abinas, Saran, Yasir)
 */

// Import dependencies
const asyncHandler = require("express-async-handler");
const { Comment } = require("../Models");

/**
 * @description - Get all comments
 * @route - GET /api/comments
 * @access - Public
 * @param {*} req - Request object
 * @param {*} res - Response object
 * @param {*} next - Next middleware
 * @returns - All comments
 */
const getAllComments = asyncHandler(async (req, res, next) => {
	try {
		const comments = await Comment.findAll();
		res.status(200).json(comments);
	} catch (error) {
		res.status(500).send("Internal Server Error");
	}
});

/**
 * @description - Get a comment by id
 * @route - GET /api/comments/:id
 * @access - Public
 * @param {*} req - Request object
 * @param {*} res - Response object
 * @param {*} next - Next middleware
 * @returns - A comment
 */
const getComment = asyncHandler(async (req, res, next) => {
	try {
		const comment = await Comment.findByPk(req.params.id);
		if (!comment) {
			res.status(404).send("Comment not found");
		}
		res.status(200).json(comment);
	} catch (error) {
		res.status(500).send("Internal Server Error");
	}
});

/**
 * @description - Create a comment
 * @route - POST /api/comments
 * @access - Private
 * @param {*} req - Request object
 * @param {*} res - Response object
 * @param {*} next - Next middleware
 * @returns - Created comment
 */
const createComment = asyncHandler(async (req, res, next) => {
	try {
		const comment = await Comment.create(req.body);
		res.status(201).json(comment);
	} catch (error) {
		res.status(500).send("Internal Server Error");
	}
});

/**
 * @description - Update a comment
 * @route - PUT /api/comments/:id
 * @access - Private
 * @param {*} req - Request object
 * @param {*} res - Response object
 * @param {*} next - Next middleware
 * @returns - Updated comment
 */
const updateComment = asyncHandler(async (req, res, next) => {
	try {
		const comment = await Comment.findByPk(req.params.id);
		if (!comment) {
			res.status(404).send("Comment not found");
		}
		await comment.update(req.body);
		res.status(200).json(comment);
	} catch (error) {
		res.status(500).send("Internal Server Error");
	}
});

/**
 * @description - Delete a comment
 * @route - DELETE /api/comments/:id
 * @access - Private
 * @param {*} req - Request object
 * @param {*} res - Response object
 * @param {*} next - Next middleware
 * @returns - Deleted comment
 */

const deleteComment = asyncHandler(async (req, res, next) => {
	try {
		const comment = await Comment.findByPk(req.params.id);
		if (!comment) {
			res.status(404).send("Comment not found");
		}
		await comment.destroy();
		res.status(200).json(comment);
	} catch (error) {
		res.status(500).send("Internal Server Error");
	}
});

/**
 * @description Get all comments of a book
 * @route GET /api/comments/book/:bookId
 * @access Public
 * @param {*} req - Request object
 * @param {*} res - Response object
 * @param {*} next - Next middleware
 * @returns All comments of a book
 */
const getAllCommentsOfBook = asyncHandler(async (req, res, next) => {
    try {
        const comments = await Comment.findAll({
            where: {
                bookId: req.params.bookId
            }
        });
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }

});

/**
 * @description Get all comments of a user
 * @route GET /api/comments/user/:userId
 * @access Public
 * @param {*} req - Request object
 * @param {*} res - Response object
 * @param {*} next - Next middleware
 * @returns All comments of a user
    */
const getAllCommentsOfUser = asyncHandler(async (req, res, next) => {
    try {
        const comments = await Comment.findAll({
            where: {
                userId: req.params.userId
            }
        });

        res.status(200).json(comments);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }

});

module.exports = {
	getAllComments,
	getComment,
	createComment,
	updateComment,
	deleteComment,
    getAllCommentsOfBook,
    getAllCommentsOfUser
    
};
