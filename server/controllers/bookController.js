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

const { Book, User } = require("../Models");
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
		const { isbn, title, author, genre, publicationDate, description, pic } =
			req.body;
		var ISBN = isbn;
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
exports.getBook = asyncHandler(async (req, res) => {
	try {
		const { id } = req.params;

		// Check the book exists
		const extBook = await Book.findById(id);

		if (!extBook) {
			return res.status(404).json({ message: "Book not found" });
		}

		return res.json(extBook);
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
exports.getAllBooks = asyncHandler(async (req, res) => {
	try {
		// Check the book exists
		const extBook = await Book.find();

		return res.send(extBook);
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
exports.editBook = asyncHandler(async (req, res) => {
	try {
		const id = req.body._id
		console.log(id)

		// check the book exists
		const extBook = await Book.findById(id);

		if (!extBook) {
			return res.status(404).json({ message: "Book not found" });
		}
		const dataSet = {
			ISBN: req.body.ISBN,
			title: req.body.title,
			author: req.body.author,
            genre: req.body.genre,
            publicationDate: req.body.publicationDate,
            description: req.body.description,
            pic: req.body.pic,
		}

		//await extBook.save(dataSet);
		await Book.findByIdAndUpdate(id, dataSet);

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
exports.changeStatus = asyncHandler(async (req, res) => {
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
exports.deleteBook = asyncHandler(async (req, res) => {
	try {
		const { id } = req.params;

		// check the book exists
		const extBook = await Book.findByIdAndDelete(id);

		if (!extBook) {
			return res.status(404).json({ message: "Book not found" });
		}

		return res
			.status(200)
			.json({ message: "Book deleted deleted successfully" });
	} catch (error) {
		return res.status(500).json({ message: "Internal server error" });
	}
});

/**
 * Controller for search book
 * @param {String} req - the request
 * @param {String} res - the response
 * @returns {Object} Response indicating the output
 */
exports.searchBook = asyncHandler(async (req, res) => {
	try {
		const { title } = req.params;

		// check the book exists
		const extBook = await Book.find({
			title: { $regex: title, $options: "i" },
		});

		if (!extBook) {
			return res.status(404).json({ message: "Book not found" });
		}

		return res.status(200).json({ message: "Book found", extBook });
	} catch (error) {
		return res.status(500).json({ message: "Internal server error" });
	}
});

/**
 * Controller for Like Book
 * @param {String} req - the request
 * @param {String} res - the response
 * @return {Object} Response indicating the output
 */
exports.likeBook = asyncHandler(async (req, res) => {
	try {
		const { id } = req.body;

		// check the book exists
		const book = await Book.findById(id);

		if (!book) {
			return res.status(404).json({ message: "Book not found" });
		}

		const user = await User.findById(req.id);

		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		if (book.likes.includes(user._id)) {
			return res.status(404).json({ message: "Book already exists" });
		} else {
			book.likes.push(user._id);
			await book.save();
			return res.status(200).json({ message: "Book liked" });
		}
	} catch (error) {
		return res.status(500).json({ message: "Internal server error" });
	}
});

/**
 * Controller for unLike Book
 * @param {String} req - the request
 * @param {String} res - the response
 */
exports.unLikeBook = asyncHandler(async (req, res) => {
	try {
		const { id } = req.body;
		const book = await Book.findById(id);

		if (!book) {
			return res.status(404).json({ message: "Book not found" });
		}

		const user = await User.findById(req.id);

		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		if (book.likes.includes(user._id)) {
			const index = book.likes.indexOf(user._id);
			book.likes.splice(index, 1);
			await book.save();
			return res.status(200).json({ message: "Book unliked" });
		} else {
			return res.status(200).json({ message: "Book not liked" });
		}
	} catch (error) {
		return res.status(500).json({ message: "Internal server error" });
	}
});

/**
 * Controller for Comment a book
 * @param {String} req - the request
 * @param {String} res - the response
 * @return {Object} Response indicating the output
 */
exports.commentBook = asyncHandler(async (req, res) => {
	try {
		const { id } = req.body;
		const { comment } = req.body;
		const book = await Book.findById(id);
		const user = await User.findById(req.id);
		if (!book) {
			return res.status(404).json({ message: "Book not found" });
		}
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		const commentId = uuidv4();
		book.comments.push({
			id: commentId,
			message: comment,
			user: user._id,
			commentDate: Date.now(),
		});
		await book.save();
		return res.status(200).json({ message: "Comment added" });
	} catch (error) {
		return res.status(500).json({ message: "Internal server error" });
	}
});

/**
 * Controller for delete comment
 * @param {String} req - the request
 * @param {String} res - the response
 * @return {Object} Response indicating the output
 */
exports.deleteComment = asyncHandler(async (req, res) => {
	try {
		const { id } = req.body;
		const { commentId } = req.body;
		const book = await Book.findById(id);
		const user = await User.findById(req.id);
		if (!book) {
			return res.status(404).json({ message: "Book not found" });
		}
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		const commentIndex = book.comments.findIndex(
			(comment) => comment.id === commentId
		);
		book.comments.splice(commentIndex, 1);
		await book.save();
		return res.status(200).json({ message: "Comment deleted" });
	} catch (error) {
		return res.status(500).json({ message: "Internal server error" });
	}
});

/**
 * Controller for request book
 * @param {String} req - the request
 * @param {String} res - the response
 * @return {Object} Response indicating the output
 */
exports.requestBook = asyncHandler(async (req, res) => {
	try {
		const { id } = req.body;
		const user = await User.findById(req.id);
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		const book = await Book.findById(id);

		if (!book) {
			return res.status(404).json({ message: "Book not found" });
		}
		if (book.request) {
			return res.status(404).json({ message: "Book already requested" });
		}
		book.request = user._id;
		await book.save();
		return res.status(200).json({ message: "Book requested" });
	} catch (error) {
		return res.status(500).json({ message: "Internal server error" });
	}
});

/**
 * Controller for remove request book
 * @param {String} req - the request
 * @param {String} res - the response
 * @return {Object} Response indicating the output
 */
exports.removeRequestBook = asyncHandler(async (req, res) => {
	try {
		const { id } = req.body;
		const user = await User.findById(req.id);
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		const book = await Book.findById(id);

		if (!book) {
			return res.status(404).json({ message: "Book not found" });
		}
		if (!book.request) {
			return res.status(404).json({ message: "Book not requested" });
		}
		book.request = null;
		await book.save();
		return res.status(200).json({ message: "Book removed" });
	} catch (error) {
		return res.status(500).json({ message: "Internal server error" });
	}
});

/**
 * Controller for rent a book
 * @param {String} req - the request
 * @param {String} res - the response
 * @return {Object} Response indicating the output
 */

exports.rentBook = asyncHandler(async (req, res) => {
	try {
		const { id } = req.body;
		const user = await User.findById(req.id);
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		const book = await Book.findById(id);

		if (!book) {
			return res.status(404).json({ message: "Book not found" });
		}
		if (book.rented) {
			if (book.request) {
				return res.status(404).json({ message: "Book already requested" });
			} else {
				book.request = user._id;
				await book.save();
				return res.status(200).json({ message: "Book rented" });
			}
		} else {
			const rentID = uuidv4();
			book.rented.id = rentID;
			book.rented.userId = user._id;
			book.rented.rentDate = Date.now();
			book.rented.name = user.name;
			book.rented.email = user.email;
			book.rented.phone = user.phone;
			var dataset = {
				id: rentID,
				userid: user.id,
				rentDate: Date.now(),
				name: user.name,
				email: user.email,
				phone: user.phone,
			};
			book.buyers.push(dataset);

			await book.save();
			return res.status(200).json({ message: "Book rented" });
		}
	} catch (error) {
		return res.status(500).json({ message: "Internal server error" });
	}
});

/**
 * Controller for return a book
 * @param {String} req - the request
 * @param {String} res - the response
 */
exports.returnBook = asyncHandler(async (req, res) => {
	try {
		const { id } = req.body;
		const user = await User.findById(req.id);
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		const book = await Book.findById(id);
		if (!book) {
			return res.status(404).json({ message: "Book not found" });
		}
		if (!book.rented) {
			return res.status(404).json({ message: "Book not rented" });
		} else {
			if (book.rented.userid !== user._id) {
				return res.status(404).json({ message: "Book not rented by you" });
			} else {
				var rentid = book.rented.id;
				book.buyers.forEach(function (item) {
					if (item.id === rentid) {
						item.returnDate = Date.now();
					}
				});

				book.rented = null;
				await book.save();
				return res.status(200).json({ message: "Book returned" });
			}
		}
	} catch (error) {
		return res.status(500).json({ message: "Internal server error" });
	}
});
/**
 * Controller for search book
 * @param {String} req - the request
 * @param {String} res - the response
 * @returns {Object} Response indicating the output
 */
exports.searchBookByAuthor = asyncHandler(async (req, res) => {
	try {
		const { author } = req.params;

		// check the book exists
		const extBook = await Book.find({
			author: { $regex: author, $options: "i" },
		});

		if (!extBook) {
			return res.status(404).json({ message: "Book not found" });
		}

		return res.status(200).json({ message: "Book found", extBook });
	} catch (error) {
		return res.status(500).json({ message: "Internal server error" });
	}
});

/**
 * Controller for search book
 * @param {String} req - the request
 * @param {String} res - the response
 * @returns {Object} Response indicating the output
 */
exports.searchBookByGenre = asyncHandler(async (req, res) => {
	try {
		const { genre } = req.params;

		// check the book exists
		const extBook = await Book.find({
			genre: { $regex: genre, $options: "i" },
		});

		if (!extBook) {
			return res.status(404).json({ message: "Book not found" });
		}

		return res.status(200).json({ message: "Book found", extBook });
	} catch (error) {
		return res.status(500).json({ message: "Internal server error" });
	}
});

/**
 * Controller for req book
 * @param {String} req - the request
 * @param {String} res - the response
 * @returns {Object} Response indicating the output
 */
exports.reqBook = asyncHandler(async (req, res) => {
	try {
		const { id } = req.params;
		const { status } = req.body;

		// check the book exists
		const extBook = await Book.fineById(id);

		if (!extBook) {
			return res.status(404).json({ message: "Book not found" });
		}

		const extReq = await User.findById(extBook._id);
		if (!extReq) {
			return res.status(404).json({ message: "Book have been requested" });
		} else {
			await extReq.save({
				status: status,
				book: extBook._id,
				user: req.user._id,
			});

			return res.status(200).json({ message: "Book Status Updated" });
		}
	} catch (error) {
		return res.status(500).json({ message: "Internal server error" });
	}
});

/**
 * Controller for Rent book
 * @param {String} req - the request
 * @param {String} res - the response
 * @returns {Object} Response indicating the output
 */
exports.rentBook = asyncHandler(async (req, res) => {
	try {
	} catch (error) {
		return res.status(500).json({ message: "Internal server error" });
	}
});

/**
 * Controller for return book
 * @param {String} req - the request
 * @param {String} res - the response
 * @returns {Object} Response indicating the output
 */
exports.returnBook = asyncHandler(async (req, res) => {
	try {
	} catch (error) {
		return res.status(500).json({ message: "Internal server error" });
	}
});

/**
 * Controller for get all books by user
 * @param {String} req - the request
 * @param {String} res - the response
 * @returns {Object} Response indicating the output
 */
exports.getAllBooksByUser = asyncHandler(async (req, res) => {
	try {
	} catch (error) {
		return res.status(500).json({ message: "Internal server error" });
	}
});

/**
 * Controller for all book inform as all likes and all comments all rent and all req
 * @param {String} req - the request
 * @param {String} res - the response
 * @returns {Object} Response indicating the output
 */
exports.getAllBookInfo = asyncHandler(async (req, res) => {
	try {
		const { id } = req.params;
		const extBook = await Book.fineById(id);
		if (!extBook) {
			return res.status(404).json({ message: "Book not found" });
		}
		const extLike = await Like.find({ book: extBook._id });
		const extComment = await Comment.find({ book: extBook._id });
		const extRent = await Rent.find({ book: extBook._id });
		const extReq = await Req.find({ book: extBook._id });
		// set all data to a single []
		const allData = [extLike, extComment, extRent, extReq];
		return res.status(200).json({ message: "All data", allData });
	} catch (error) {
		return res.status(500).json({ message: "Internal server error" });
	}
});
