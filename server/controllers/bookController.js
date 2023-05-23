/**
 * Book Controller
 *
 * @project : Mi LIBRO
 * @version : 1.0.1
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajayos, Akarsh, Abinas, Saran, Yasir
 * @created : 2023-05-18 18:23:36
 * @modified : 2023-05-23 10:30:42
 * @editor : Ajayos
 * @file : bookController.js
 * @path : /controllers/bookController.js
 *
 * Description: Controller for handling book-related routes.
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abinas, Saran, Yasir)
 */

// import module

const { Book } = require("../models/");
const asyncHandler = require("express-async-handler");

/**
 * Controller function for book create.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response containing the book created.
 * @throws {Object} Error object if an error occurs during book creation.
 */
exports.createBook = asyncHandler(async (req, res) => {
	try {
		const { ISBN, title, author, genre, publicationDate, description, pic } =
			req.body;

		// Find the book by ISBN
		const check = await Book.findOne({ ISBN });

		// If book is found
		if (check) {
			return res.status(409).json({ message: "Book already exists" });
		}

		// create new book
		const newBook = new Book({
			ISBN,
			title,
			author,
			genre,
			publicationDate,
			description,
			pic,
		});

		// save it
		await newBook.save();

		return res.status(200).json({ message: "Book created successfully" });
	} catch (error) {
		return res.status(500).json({ message: "Internal server error" });
	}
});

/**
 * Controller for get book from database
 *
 * @param {String} req - the request
 * @param {String} res - the response
 * @returns {Object} Response indicating the book details
 * @throws {Object} Response with the error message
 */
modules.getBook = asyncHandler(async (req, res) => {
	try {
		const { ISBN } = req.params;

		// Check the book exists
		const extBook = await Book.findOne({ ISBN });

		if (!extBook) {
			return res.status(404).json({ message: "Book not found" });
		}

		return res.json(extBook);
	} catch (error) {
		return res.status(500).json({ message: "Internal server error" });
	}
});

/**
 * Controller for edit a book
 *
 * @param {String} req - the request
 * @param {String} res - the response
 * @returns {Object} Response indicating the output
 * @throws {Object} Response with the error message
 */
modules.editBook = asyncHandler(async (req, res) => {
	try {
		const { id } = req.params;

		// check the book exists
		const extBook = await Book.fineById(id);

		if (!extBook) {
			return res.status(404).json({ message: "Book not found" });
		}

		await extBook.save(req.body);

		return res.status(200).json({ message: "Book saved" });
	} catch (error) {
		return res.status(500).json({ message: "Internal server error" });
	}
});

/**
 * Controller for change book status
 *
 * @param {String} req - the request
 * @param {String} res - the response
 * @returns {Object} Response indicating the output
 * @throws {Object} Response with the error message
 */
modules.changeStatus = asyncHandler(async (req, res) => {
	try {
		const { id } = req.params;
		const { status } = req.body;

		// check the book exists
		const extBook = await Book.fineById(id);

		if (!extBook) {
			return res.status(404).json({ message: "Book not found" });
		}

		extBook.status = status;
		await extBook.save();

		return res.status(200).json({ message: "Book Status Updated" });
	} catch (error) {
		return res.status(500).json({ message: "Internal server error" });
	}
});

/**
 * Controller for delete book
 *
 * @param {String} req - the request
 * @param {String} res - the response
 * @returns {Object} Response indicating the output
 * @throws {Object} Response with the error message
 */
modules.deleteBook = asyncHandler(async (req, res) => {
	try {
		const { id } = req.params;

		// check the book exists
		const extBook = await Book.findByIdAndDelete(id);

		if (!extBook) {
			return res.status(404).json({ message: "Book not found" });
		}

		return res.status(200).json({ message: "Book deleted deleted successfully" });
	} catch (error) {
		return res.status(500).json({ message: "Internal server error" });
	}
});
