/**
 * Like Model
 * 
 * @project : MI LIBRO
 * @version : 1.0.1
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abinas, Saran, Yasir
 * @created : 2023-05-17 10:14:13
 * @modified : 2023-05-20 14:11:12
 * @editor : Ajayos
 * @file : likeModel.js
 * @path : /models/likeModel.js
 * 
 * Description: Model for the Like entity.
 * 
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 * 
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abinas, Saran, Yasir)
 */

// Import the mongoose package
const mongoose = require('mongoose');

/**
 * Like schema for managing like.
 */
const likeSchema = new mongoose.Schema({
    // Define the 'user' field with type ObjectId and it is required
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    // Define the 'book' field with type ObjectId and it is required
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true
    },
    // Define the 'likeDate' field with type Date and default value Date.now
    likeDate: {
        type: Date,
        default: Date.now
    },
});

// Export the Like model
const Like = mongoose.model('BookLike', likeSchema);

module.exports = Like;