/**
 * Rental Model
 * 
 * @project : MI LIBRO
 * @version : 1.0.1
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajayos, Akarsh, Abinas, Saran, Yasir
 * @created : 2023-05-17 10:14:13
 * @modified : 2023-05-20 14:11:12
 * @editor : Ajayos
 * @file : rentalModel.js
 * @path : /models/rentalModel.js
 * 
 * Description: Model for the Rental entity.
 * 
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 * 
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abinas, Saran, Yasir)
 * 
 */

// Import the mongoose package
const mongoose = require('mongoose');

/**
 * Rental schema for managing rental data.
 */

const rentalSchema = new mongoose.Schema({
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
    // Define the 'rentalDate' field with type Date and default value Date.now
    rentalDate: {
        type: Date,
        default: Date.now
    },
    // Define the 'returnDate' field with type Date
    returnDate: {
        type: Date
    },
});

// Export the Rental model
module.exports = mongoose.model('Rental', rentalSchema);
