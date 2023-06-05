/**
 * User Router
 *
 * @project : MI LIBRO
 * @version: 1.0.2
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abinas, Saran, Yasir
 * @created : 2023-05-17 10:14:13
 * @modified : 2023-05-05 14:11:12
 * @editor : Ajayos
 * @file : userRouter.js
 * @path : /Routers/userRouter.js
 *
 * Description: Router for handling user-related routes.
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abinas, Saran, Yasir)
 */

const express = require("express");
const router = express.Router();
const { protectUser } = require("../middleware/authMiddleware");
const User = require("../controllers/userController");

router.post("/login", User.login)

router.post("/", User.createAccount);

router.get("/", protectUser, User.LogeUser);

router.put("/", protectUser, User.editAccount);

router.delete("/", protectUser, User.deleteAccount);

router.put("/password", protectUser, User.updatePassword);

router.put("/profile", protectUser, User.editAccountPic);

router.put("/forgot", protectUser, User.forgotPassword);

router.post("/books", protectUser, User.AllBooks);

router.post("/mybooks", protectUser, User.getUserData);

router.get("/book", protectUser, User.AllBooks);

router.get("/book/:id", protectUser, User.getBook);

router.get("/books/liked", protectUser, User.getLikedBooks);

router.post("/books/liked", protectUser, User.likeBook);

router.delete("/books/liked/:id", protectUser, User.unlikeBook);

router.post("/books/comment", protectUser, User.commentBook);

module.exports = router;