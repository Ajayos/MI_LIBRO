/**
 * Status Model
 * 
 * @project : MI LIBRO
 * @version : 1.0.1
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajayos, Akarsh, Abinas, Saran, Yasir
 * @created : 2023-05-17 10:19:06
 * @modified : 2023-05-20 13:06:25
 * @editor : Ajayos
 * @file : statusModel.js
 * @path : models/statusModel.js
 * 
 * Description: Model for the Status entity.
 * 
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 * 
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abinas, Saran, Yasir)
 */

// Import the mongoose package
const mongoose = require('mongoose');

/**
 * Status schema for managing status data.
 */
const statusSchema = new mongoose.Schema({
    