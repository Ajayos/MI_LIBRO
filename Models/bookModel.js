/**
 * Book Model
 *
 * @project : MI LIBRO
 * @version : 1.0.2
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abinas, Saran, Yasir
 * @created : 2023-05-17 11:12:02
 * @modified : 2023-06-03 23:19:14
 * @editor : Ajayos
 * @file : bookModel.js
 * @path : /Models/bookModel.js
 *
 * Description: This module exports a Mongoose model for managing book data in the database. It defines a book schema
 * with fields such as title, author, genre, publication date, description, status, rented by, buy info, likes, comments, requests, and buyers.
 * The Book model allows adding, updating, or deleting book data from the database.
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abinas, Saran, Yasir)
 */

// Import the mongoose package
const mongoose = require("mongoose");


/**
 * Book schema for managing book data.
 */
const bookSchema = new mongoose.Schema({
	// Define the 'ISBN' field with type String and it is required and should be unique
	ISBN: {
		type: String,
		required: true,
		unique: true,
	},
	// Define the 'title' field with type String and it is required
	title: {
		type: String,
		required: true,
	},
	// Define the 'author' field with type String and it is required
	author: {
		type: String,
		required: true,
	},
	// Define the 'genre' field with type String and it is required
	genre: {
		type: String,
		required: true,
	},
	// Define the 'pic' field with type String and it is required
	pic: {
		type: String,
		required: true,
	},
	// Define the 'publicationDate' field with type Date and it is required
	publicationDate: {
		type: Date,
		required: true,
	},
	// Define the 'description' field with type String and it is required
	description: {
		type: String,
		required: true,
	},
	// Define the 'status' field with type String, it has enum values 'Available', 'Rented', 'Sold', and default value 'Available'
	status: {
		type: String,
		enum: ["Available", "Rented", "Processing", "Unavailable"],
		default: "Available",
	},
	// Define the 'comments' field as an array of Comment objects
	comments: [
		{
		  id: {
			type: String,
		  },
		  message: {
			type: String,
		  },
		  user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		  },
		  commentDate: {
			type: Date,
		  },
		},
	  ],
	// Define the 'likes' field as an array of Like objects
	likes: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	],
	// Define the 'rented' field as an String field
	rented: {
		id: {
			type: String,
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		name: {
			type: String,
		},
		email: {
			type: String,
		},
		phone: {
			type: String,
		},
		rentDate: {
			type: Date,
		},
	},
	// Define the 'request' field as an array of Request objects
	request: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	// Define the 'buyers' field as an array of User objects
	buyers: [
		{
			id: {
				type: String,
			},
			user: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
			},
			stars: {
				type: Number,
			},
			rentDate: {
				type: Date,
			},
			returnDate: {
				type: Date,
			},
		},
	],
});

/**
 * Book schema for managing book data.
 * The bookSchema defines the following fields for a book document:
 * - ISBN: A required, unique String field representing the ISBN of the book.
 * - title: A required String field representing the title of the book.
 * - author: A required String field representing the author of the book.
 * - genre: A required String field representing the genre of the book.
 * - pic: A required String field representing the URL or path to a picture of the book.
 * - publicationDate: A required Date field representing the publication date of the book.
 * - description: A required String field representing the description of the book.
 * - status: A String field with enum values 'Available', 'Rented', or 'Sold'. It defaults to 'Available'.
 * - comments: An array of Comment objects representing the comments for the book.
 * - likes: An array of Like objects representing the likes for the book.
 * - requests: An array of Request objects representing the requests for the book.
 * - buyers: An array of User objects representing the buyers who purchased the book.
 */
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;