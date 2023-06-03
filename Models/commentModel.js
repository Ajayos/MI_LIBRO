/**
 * Comment Model
 *
 * @project : MI LIBRO
 * @version : 1.0.1
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abinas, Saran, Yasir
 * @created : 2023-05-17 10:14:13
 * @modified : 2023-05-22 21:44:12
 * @editor : Ajayos
 * @file : commentModel.js
 * @path : /models/commentModel.js
 *
 * Description: Model for the Comment entity.
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abinas, Saran, Yasir)
 */

// Import the mongoose package
const mongoose = require("mongoose");

/**
 * Comment schema for managing comment.
 */
const commentSchema = new mongoose.Schema({
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
  // Define the 'comment' field with type String and it is required
  comment: {
    type: String,
    required: true,
  },
  // Define the 'commentDate' field with type Date and default value Date.now
  commentDate: {
    type: Date,
    default: Date.now,
  },
});

// Export the Comment model
module.exports = mongoose.model("Comment", commentSchema);
