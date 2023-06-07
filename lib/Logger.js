/**
 * Logger creater
 *
 * @project : MI LIBRO
 * @version : 1.0.2
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abinas, Saran, Yasir
 * @created : 2023-05-17 10:04:13
 * @modified : 2023-06-07 10:15:30
 * @editor : Ajayos
 * @file : Logger.js
 * @path : /lib/Logger.js
 *
 * Description: This file define the logger function.
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abinas, Saran, Yasir)
 */

const logger = require("@ajayos/nodelogger");

async function setupLogger() {
    await logger.start({
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        filename: 'logs/%DATE%.log',
        datePattern: 'YYYY-MM/DD',
        zippedArchive: false,
        maxSize: '1g',
        level: 'info'
      });
}

module.exports = setupLogger;