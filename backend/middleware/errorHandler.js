/**
 * Error Handler Middleware
 *
 * @project : MI LIBRO
 * @version : 1.0.1
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abinas, Saran, Yasir
 * @created : 2023-05-17 10:19:06
 * @modified : 2023-05-20 14:24:10
 * @editor : Ajayos
 * @file : errorHandler.js
 * @path : middleware/errorHandler.js
 *
 * Description: Middleware to handle errors and send appropriate responses.
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abinas, Saran, Yasir)
 */


const errorHandler = (err, req, res, next) => {
    log(err.stack, "e")
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
      message: 'Internal Server Error',
      error: err.message,
    });
  };
  
module.exports =  errorHandler
  