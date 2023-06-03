/**
 * Request Model
 *
 * @project : MI LIBRO
 * @version : 1.0.1
 * @link : http://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abinas, Saran and Yasir
 * @created : 2023-05-17 10:14:13
 * @modified : 2023-05-20 14:11:12
 * @editor : Ajayos
 * @file : reqModel.js
 * @path : /models/reqModel.js
 *
 * Description: Model for handling requests.
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abinas, Saran, Yasir)
 */

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reqSchema = new Schema({
	// Define the 'user' field with type ObjectId and it is required
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	// Define the 'book' field with type ObjectId and it is required
	book: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Book",
		required: true,
	},
	// Define the'status' field with type String and it is required
	status: {
		type: String,
		enum: ["pending", "accepted", "rejected"],
		default: "pending",
	},
	// Define the 'createdAt' field with type Date and default value Date.now
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

// Export the Request model
const Request = mongoose.model("Request", reqSchema);

module.exports = Request;
