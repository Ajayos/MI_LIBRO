/**
 * Logger setup file.
 *
 * @project : MI LIBRO
 * @version : 1.0.1
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abhinas, Saran, Yasir
 * @created : 2023-05-17 20:35:00
 * @modified : 2023-05-17 20:40:00
 * @editor : Ajayos
 * @file : logger.js
 * @path : lib/logger.js
 *
 * Description: This file sets up the logger using the '@ajayos/nodelogger' package.
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abhinas, Saran, Yasir)
 */

const { createLogger } = require('@ajayos/nodelogger');

/**
 * Set up the logger.
 */
async function setupLogger() {
  await createLogger({
    timeZone: 'Asia/Kolkata',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
    filename: 'logs/%DATE%.log',
    datePattern: 'YYYY-MM/DD',
    zippedArchive: false,
    maxSize: '1g',
    level: 'info'
  });
}

module.exports = setupLogger;
