/**
 * User Controller
 *
 * @project : MI LIBRO
 * @version : 1.0.1
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abinas, Saran, Yasir
 * @created : 2023-05-17 10:04:13
 * @modified : 2023-05-23 10:15:30
 * @editor : Ajayos
 * @file : userController.js
 * @path : controllers/userController.js
 *
 * Description: Controller for handling user-related actions.
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abinas, Saran, Yasir)
 */

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { User } = require("../Models");
const generateAuthToken = require("../lib/generateToken");
const asyncHandler = require("express-async-handler");

/**
 * Controller function for user login.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response containing the authentication token.
 * @throws {Object} Error object if an error occurs during the login process.
 */
exports.login = asyncHandler(async (req, res) => {
	try {
		const { email, password } = req.body;

		// Find the user by email
		const user = await User.findOne({ email: email });

		// If user not found, return error
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		// Compare the provided password with the hashed password in the database
		const isMatch = await bcrypt.compare(password, user.password);

		// If passwords don't match, return error
		if (!isMatch) {
			return res.status(401).json({ message: "Invalid credentials" });
		}

		// Generate and return a token for authentication
		const token = generateAuthToken(user._id, user.email, user.password);

		// Add the token to the user data
		user.token = token;
		var Data = {
			token: token,
			user
		}

		return res.status(200).json(Data);
	} catch (error) {
		return res.status(500).json({ message: "Internal server error" });
	}
});

/**
 * Controller function for user account creation.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response indicating successful user account creation.
 * @throws {Object} Error object if an error occurs during the account creation process.
 */
exports.createAccount = asyncHandler(async (req, res) => {


	try {
		const {
			email,
			newPassword,
			pic,
			name,
			dob,
			age,
			phoneNo,
			place,
			education,
			address,
		} = req.body;

		// Check if the user already exists
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(409).json({ message: "User already exists" });
		}

		// Hash the password
		const hashedPassword = await bcrypt.hash(newPassword, 10);

		// Create the new user account
		const newUser = new User({
			email,
			password: hashedPassword,
			name,
			pic,
			dob,
			age,
			address,
			phoneNumber:phoneNo,
			place,
			education,
			contactDetails: address,
			access: true,
		});
		await newUser.save();

		const userInfo = await User.findOne({ email });
		// Generate and return a token for authentication
		const token = generateAuthToken(userInfo._id, email, hashedPassword);

		return res.status(201).json({
			message: "User account created successfully",
			token: token,
			name: name,
			email: email,
			pic: pic,
			address: address,
			phoneNumber: phoneNo,
			phoneNo,
			place,
			education,
            dob,
            age,
            access: true,
			contactDetails: address,
		});
	} catch (error) {
		return res.status(500).json({ message: "Internal server error" });
	}
});

 
/**
 * Controller function for user login.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response containing the authentication token.
 * @throws {Object} Error object if an error occurs during the login process.
 */
exports.LogeUser = asyncHandler(async (req, res) => {
	try {
		return res.status(200).json(req.user);
	} catch (error) {
		return res.status(500).json({ message: "Internal server error" });
	}
});

/**
 * Controller function for update password of a user account.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response indicating successful update password.
 * @throws {Object} Error object if an error occurs during the account password update process.
 */
exports.updatePassword = asyncHandler(async (req, res) => {
	try {
		const userId = req.user._id;
		const { password } = req.body;

		// Find the user by ID
		const user = await User.findById(userId);

		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		// Hash the password
		const hashedPassword = await bcrypt.hash(password, 10);
		console.log(hashedPassword)
		user.password = hashedPassword;
		await user.save();

		const userInfo = await User.findOne({ email });
		// Generate and return a token for authentication
		const token = generateAuthToken(userInfo._id, userInfo.email, hashedPassword);

		return res
			.status(200)
			.json({ token: token, message: "Password updated successfully" });
	} catch (error) {
		return res.status(500).json({ message: "Internal server error" });
	}
});

/**
 * Controller function for forgot password of a user account.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response indicating successful changed password.
 * @throws {Object} Error object if an error occurs during the account password change process.
 */
exports.forgotPassword = asyncHandler(async (req, res) => {
	try {
		const { email, dob, password } = req.body;
		console.log(email, dob, password)

		// Find the user by ID
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		//if (user.dob !== dob) {
		//	return res.status(409).json({ message: "Dob don't match" });
		//}
		// Hash the password
		const hashedPassword = await bcrypt.hash(password, 10);

		user.password = hashedPassword;
		await user.save();

		const userInfo = await User.findOne({ email });
		// Generate and return a token for authentication
		const token = generateAuthToken(userInfo._id);

		return res.status(200).json({ message: "Password updated successfully" });
	} catch (error) {
		return res.status(500).json({ message: "Internal server error" });
	}
});

/**
 * Controller function for editing a user account.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response indicating successful account update.
 * @throws {Object} Error object if an error occurs during the account update process.
 */
exports.editAccount = asyncHandler(async (req, res) => {
	try {
		const userId = req.user._id;
		const user = await User.findById(userId);
		user.name = req.body.name;
		user.education = req.body.education;
		user.contactDetails = req.body.contactDetails;
		user.dob = req.body.dob;
		user.age = req.body.age;
		user.place = req.body.place;
		await user.save();

		return res
			.status(200)
			.json({ message: "User account updated successfully" });
	} catch (error) {
		return res.status(500).json({ message: "Internal server error" });
	}
});

/**
 * Controller function for deleting a user account.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response indicating successful account deletion.
 * @throws {Object} Error object if an error occurs during the account deletion process.
 */
exports.deleteAccount = asyncHandler(async (req, res) => {
	try {
		const { userId } = req.params;

		// Find the user by ID and delete
		const deletedUser = await User.findByIdAndDelete(userId);
		if (!deletedUser) {
			return res.status(404).json({ message: "User not found" });
		}

		return res
			.status(200)
			.json({ message: "User account deleted successfully" });
	} catch (error) {
		return res.status(500).json({ message: "Internal server error" });
	}
});

/**
 * Controller method to get user by ID
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response indicating the user data.
 * @throws {Object} Error object if an error occurs during the search of the user.
 */
exports.getUserById = asyncHandler(async (req, res) => {
	try {
		const { userId } = req.params;

		// Find the user by ID
		const user = await User.findById(userId);
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		return res.status(200).json({ user });
	} catch (error) {
		return res.status(500).json({ message: "Internal server error" });
	}
});

/**
 * Controller method to update user profile
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response indicating the updated profile.
 * @throws {Object} Error object if an error occurs during the update user profile.
 */
exports.updateUserProfile = asyncHandler(async (req, res) => {
	try {
		const userId = req.user._id;
		const { pic } = req.body;
		// Find the user by ID
		const user = await User.findById(userId);
		user.pic = pic;
		await user.save();

		return res
			.status(200)
			.json({ message: "User profile updated successfully" });
	} catch (error) {
		return res.status(500).json({ message: "Internal server error" });
	}
});

/**
 * Controller method for count of books rented by user
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response indicating the value of books rented by the user.
 * @throws {Object} Error object if an error occurs during the check of user book rented data.
 */
exports.countBooksRented = asyncHandler(async (req, res) => {
	try {
		const { userId } = req.params;

		// Find the user by ID
		const user = await User.findById(userId);
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		return res.status(200).json({ count: user.booksRented });
	} catch (error) {
		return res.status(500).json({ message: "Internal server error" });
	}
});

/**
 * Controller method for add how many books rented by user
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Response indicating the value of books rented by the user.
 * @throws {Object} Error object if an error occurs during the check of user book rented data.
 */
exports.addBooksRented = asyncHandler(async (req, res) => {
	try {
		const { userId } = req.params;

		// Find the user by ID
		const user = await User.findById(userId);
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		user.booksRented = user.booksRented + 1;
		await user.save();

		return res
			.status(200)
			.json({ message: "Books rented count updated successfully" });
	} catch (error) {
		return res.status(500).json({ message: "Internal server error" });
	}
});

/**
 * Controller method for change user access to the site.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @return {Object} - Response indicating the user access updated.
 * @throws {Object} Error object if an error occurs during the update user access.
 */
exports.changeAccess = asyncHandler(async (req, res) => {
	try {
		const { userId } = req.params;
		const { access } = req.body;

		// Find the user by ID
		const user = await User.findById(userId);
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		user.access = access;
		await user.save();

		return res
			.status(200)
			.json({ message: "User access updated successfully" });
	} catch (error) {
		return res.status(500).json({ message: "Internal server error" });
	}
});
