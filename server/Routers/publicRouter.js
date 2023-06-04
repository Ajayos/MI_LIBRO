/**
 * Public Router
 *
 * @project : MI LIBRO
 * @version : 1.0.2
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abinas, Saran, Yasir
 * @created : 2023-05-18 18:23:36
 * @modified : 2023-06-03 14:30:42
 * @editor : Ajayos
 * @file : publicRouter.js
 * @path : /Router/publicRouter.js
 *
 * Description: Router for handling public-related routes.
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abinas, Saran, Yasir)
 */

const express = require("express");
const router = express.Router();
const path = require("path");
const public = path.join(__dirname, "..", "Public")

router.get("/img.svg", (req, res) => {
    res.sendFile(path.join(public, "/img.svg"));
});

router.get("/500.svg", (req, res) => {
    res.sendFile(path.join(public, "/500.svg"));
});

module.exports = router;