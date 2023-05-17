/**
 * Module for managing book data in the database.
 *
 * @project : MI LIBRO
 * @version : 1.0.1
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abhinas, Saran, Yasir
 * @created : 2023-05-17 11:12:02
 * @modified : 2023-05-17 22:19:14
 * @editor : Ajayos
 * @file : Books.js
 * @path : Models/Books.js
 *
 * Description: This module exports a Mongoose model for managing book data in the database. It defines a book schema
 * with fields such as title, author, genre, publication date, description, status, rented by, buy info, likes, and comments.
 * The Book model allows adding, updating, or deleting book data from the database.
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abhinas, Saran, Yasir)
 */

const mongoose = require('mongoose');

/**
 * Book schema for managing book data.
 */
const bookSchema = new mongoose.Schema({
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
    enum: ['Available', 'Rented', 'Sold'],
    default: 'Available',
  },
  // Define the 'rentedBy' field with type String and default value null
  rentedBy: {
    type: String,
    default: null,
  },
  // Define the 'buyInfo' field as an embedded document with 'buyer', 'purchaseDate', and 'returnDate' fields
  buyInfo: {
    buyer: {
      type: String,
      default: null,
    },
    purchaseDate: {
      type: Date,
      default: null,
    },
    returnDate: {
      type: Date,
      default: null,
    },
  },
  // Define the 'likes' field as an array of objects referencing the 'User' model
  likes: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    },
  ],
  // Define the 'comments' field as an array of objects with 'user' and 'comment' fields
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
});

/**
 * Create a Book model using the book schema.
 *
 * @param {String} title - The title of the book. (required)
 * @param {String} author - The author of the book. (required)
 * @param {String} genre - The genre of the book. (required)
 * @param {Date} publicationDate - The publication date of the book. (required)
 * @param {String} description - The description of the book. (required)
 * @returns {Model} The Book model.
 */
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
