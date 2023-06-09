/**
 * User Controller
 *
 * @project : MI LIBRO
 * @version : 1.0.2
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abinas, Saran, Yasir
 * @created : 2023-05-17 10:04:13
 * @modified : 2023-06-03 10:15:30
 * @editor : Ajayos
 * @file : userController.js
 * @path : /Controllers/userController.js
 *
 * Description: Controller for handling user-related actions.
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abinas, Saran, Yasir)
 */

const asyncHandler = require("express-async-handler");
const User = require("../lib/User");
const Book = require("../lib/Book");

/**
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response containing the output.
 * @throws {Object} Error object if an error occurs during the process.
 */
exports.login = asyncHandler(async (req, res) => {
	try {
		const { status, message, error, data } = await User.login(req.body);

		if (error) {
			return res.status(status).json({ error: true, message });
		}

		return res.status(status).json(data);
	} catch (error) {
		return res
			.status(500)
			.json({ error: true, message: "Internal server error" });
	}
});

/**
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response containing the output.
 * @throws {Object} Error object if an error occurs during the process.
 */

exports.createAccount = asyncHandler(async (req, res) => {
	try {
		const { status, message, error, data } = await User.createAccount(req.body);

		if (error) {
			return res.status(status).json({ error: true, message });
		}

		return res.status(status).json(data);
	} catch (error) {
		return res
			.status(500)
			.json({ error: true, message: "Internal server error" });
	}
});

/**
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response containing the output.
 * @throws {Object} Error object if an error occurs during the process.
 */

exports.LogeUser = asyncHandler(async (req, res) => {
	try {
		return res.status(200).json(req.user);
	} catch (error) {
		return res
			.status(500)
			.json({ error: true, message: "Internal server error" });
	}
});

/**
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response containing the output.
 * @throws {Object} Error object if an error occurs during the process.
 */
exports.updatePassword = asyncHandler(async (req, res) => {
	try {
		const { status, message, error, data } = await User.updatePassword({
			userId: req.user._id,
			password: req.body.password,
		});

		if (error) {
			return res.status(status).json({ error: true, message });
		}

		return res.status(status).json(data);
	} catch (error) {
		return res
			.status(500)
			.json({ error: true, message: "Internal server error" });
	}
});

/**
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response containing the output.
 * @throws {Object} Error object if an error occurs during the process.
 */

exports.forgotPassword = asyncHandler(async (req, res) => {
	try {
		const { status, message, error, data } = await User.forgotPassword(
			req.body
		);

		if (error) {
			return res.status(status).json({ error: true, message });
		}

		return res.status(status).json(data);
	} catch (error) {
		return res
			.status(500)
			.json({ error: true, message: "Internal server error" });
	}
});

/**
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response containing the output.
 * @throws {Object} Error object if an error occurs during the process.
 */

exports.editAccount = asyncHandler(async (req, res) => {
	try {
		const { status, message, error, data } = await User.editAccount({
			userId: req.user._id,
			name: req.body.name,
			education: req.body.education,
			contactDetails: req.body.contactDetails,
			dob: req.body.dob,
			age: req.body.age,
			place: req.body.place,
		});

		if (error) {
			return res.status(status).json({ error: true, message });
		}

		return res.status(status).json(data);
	} catch (error) {
		return res
			.status(500)
			.json({ error: true, message: "Internal server error" });
	}
});

/**
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response containing the output.
 * @throws {Object} Error object if an error occurs during the process.
 */
exports.editAccess = asyncHandler(async (req, res) => {
	try {
		const { status, message, error, data } = await User.editAccess({
			userId: req.body.id,
			access: req.body.access,
		});

		if (error) {
			return res.status(status).json({ error: true, message });
		}

		return res.status(status).json(data);
	} catch (error) {
		return res
			.status(500)
			.json({ error: true, message: "Internal server error" });
	}
});

/**
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response containing the output.
 * @throws {Object} Error object if an error occurs during the process.
 */
exports.deleteAccount = asyncHandler(async (req, res) => {
	try {
		const { status, message, error, data } = await User.deleteAccount({
			userId: req.body.id,
		});

		if (error) {
			return res.status(status).json({ error: true, message });
		}

		return res.status(status).json(data);
	} catch (error) {
		return res
			.status(500)
			.json({ error: true, message: "Internal server error" });
	}
});

/**
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response containing the output.
 * @throws {Object} Error object if an error occurs during the process.
 */
exports.editAccountPic = asyncHandler(async (req, res) => {
	try {
		const { status, message, error, data } = await User.editAccountPic({
			userId: req.body.id,
			pic: req.body.pic,
		});

		if (error) {
			return res.status(status).json({ error: true, message });
		}

		return res.status(status).json(data);
	} catch (error) {
		return res
			.status(500)
			.json({ error: true, message: "Internal server error" });
	}
});

/**
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response containing the output.
 * @throws {Object} Error object if an error occurs during the process.
 */
exports.getAllUsers = asyncHandler(async (req, res) => {
	try {
		const { status, message, error, data } = await User.getAllUsers();

		if (error) {
			return res.status(status).json({ error: true, message });
		}

		return res.status(status).json(data);
	} catch (error) {
		return res
			.status(500)
			.json({ error: true, message: "Internal server error" });
	}
});

/**
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response containing the output.
 * @throws {Object} Error object if an error occurs during the process.
 */
exports.AllBooks = asyncHandler(async (req, res) => {
	try {
		const { status, message, error, data } = await Book.AllBooks();

		if (error) {
			return res.status(status).json({ error: true, message });
		}

		return res.status(status).json(data);
	} catch (error) {
		return res
			.status(500)
			.json({ error: true, message: "Internal server error" });
	}
});

/**
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response containing the output.
 * @throws {Object} Error object if an error occurs during the process.
 */
exports.getBook = asyncHandler(async (req, res) => {
	try {
		const { status, message, error, data } = await Book.getBook({
			id: req.params.id,
		});
		if (error) {
            return res.status(status).json({ error: true, message });
        }
		return res.status(status).json(data);
	} catch (error) {
		return res
			.status(500)
			.json({ error: true, message: "Internal server error" });
	}
});


/**
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response containing the output.
 * @throws {Object} Error object if an error occurs during the process.
 */
exports.getUserData = asyncHandler(async (req, res) => {
	try {
		const { status, message, error, data } = await User.getUserData({
			userId: req.user._id,
		});

		if (error) {
			return res.status(status).json({ error: true, message });
		}

		return res.status(status).json(data);
	} catch (error) {
		return res
			.status(500)
			.json({ error: true, message: "Internal server error" });
	}
});

/**
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response containing the output.
 * @throws {Object} Error object if an error occurs during the process.
 */
exports.getLikedBooks = asyncHandler(async (req, res) => {
	try {
		const { status, message, error, data } = await Book.getLikedBooks({
			id: req.user._id,
		});

		if (error) {
			return res.status(status).json({ error: true, message });
		}

		return res.status(status).json(data);
	} catch (error) {
		return res
			.status(500)
			.json({ error: true, message: "Internal server error" });
	}
});

/**
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response containing the output.
 * @throws {Object} Error object if an error occurs during the process.
 */
exports.likeBook = asyncHandler(async (req, res) => {
	try {
		const { status, message, error, data } = await Book.likeBook({
			user: req.user,
			id: req.body.id,
		});

		if (error) {
			return res.status(status).json({ error: true, message });
		}

		return res.status(status).json(data);
	} catch (error) {
		return res
			.status(500)
			.json({ error: true, message: "Internal server error" });
	}
});


/**
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response containing the output.
 * @throws {Object} Error object if an error occurs during the process.
 */
exports.unlikeBook = asyncHandler(async (req, res) => {
	try {
		const { status, message, error, data } = await Book.unlikeBook({
			user: req.user,
			id: req.body.id,
		});

		if (error) {
			return res.status(status).json({ error: true, message });
		}

		return res.status(status).json(data);
	} catch (error) {
		return res
			.status(500)
			.json({ error: true, message: "Internal server error" });
	}
});

/**
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response containing the output.
 * @throws {Object} Error object if an error occurs during the process.
 */
exports.commentBook = asyncHandler(async (req, res) => {
	try {
		const { status, message, error, data } = await Book.commentBook({
			user: req.user,
			id: req.body.id,
			message: req.body.message,
		});

		if (error) {
			return res.status(status).json({ error: true, message });
		}

		return res.status(status).json(data);
	} catch (error) {
		return res
			.status(500)
			.json({ error: true, message: "Internal server error" });
	}
});

/**
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response containing the output.
 * @throws {Object} Error object if an error occurs during the process.
 */
exports.requestBook = asyncHandler(async (req, res) => {
	try {
		const { status, message, error, data } = await Book.requestBook({
			user: req.user,
			id: req.body.id,
		});

		if (error) {
			return res.status(status).json({ error: true, message });
		}

		return res.status(status).json(data);
	} catch (error) {
		return res
			.status(500)
			.json({ error: true, message: "Internal server error" });
	}
});

/**
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response containing the output.
 * @throws {Object} Error object if an error occurs during the process.
 */
exports.returnBook = asyncHandler(async (req, res) => {
	try {
		const { status, message, error, data } = await Book.returnBook({
			user: req.user,
			id: req.body.id,
			stars: req.body.stars
		});

		if (error) {
			return res.status(status).json({ error: true, message });
		}

		return res.status(status).json(data);
	} catch (error) {
		return res
			.status(500)
			.json({ error: true, message: "Internal server error" });
	}
});