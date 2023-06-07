/**
 * Token generator
 *
 * @project : MI LIBRO
 * @version : 1.0.2
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abinas, Saran, Yasir
 * @created : 2023-05-17 10:04:13
 * @modified : 2023-06-07 21:15:30
 * @editor : Ajayos
 * @file : generateToken.js
 * @path : /lib/generateToken.js
 *
 * Description: This file define the token generator function.
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abinas, Saran, Yasir)
 *
 */
const jwt = require("jsonwebtoken");

const generateToken = (data) => {
	const payload = {
		id: data._id,
		email: data.email,
		hashedPassword: data.password,
	};

	const token = jwt.sign(payload, process.env.JWT_SECRET, {
		expiresIn: "1w", // 1 week expiration
	});

	return token;
};

module.exports = generateToken;
