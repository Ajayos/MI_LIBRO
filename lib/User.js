/**
 * User Functions
 *
 * @project : MI LIBRO
 * @version : 1.0.2
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abinas, Saran, Yasir
 * @created : 2023-05-17 10:04:13
 * @modified : 2023-06-03 10:15:30
 * @editor : Ajayos
 * @file : User.js
 * @path : /lib/User.js
 *
 * Description: User functions for handling user-related actions.
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abinas, Saran, Yasir)
 */

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { User, Book } = require("../Models");
const generateAuthToken = require("./generateToken");
const fs = require("fs");
/**
 * User login function.
 *
 * @param {Object} data - User login data.
 * @param {string} data.email - Email address of the user.
 * @param {string} data.password - Password of the user.
 * @returns {Object} Response indicating the status, error, message, and data of the login process.
 */
exports.login = async (data) => {
	try {
		// Destructure the data object to get the required properties
		const { email, password } = data;

		// Find the user by email
		const user = await User.findOne({ email });

		// If user not found, return error
		if (!user) {
			return {
				status: 404,
				message: "User not found",
				error: true,
				data: undefined,
			};
		}

		// Compare the provided password with the hashed password in the database
		const isMatch = await bcrypt.compare(password, user.password);

		// If passwords don't match, return error
		if (!isMatch) {
			return {
				status: 401,
				error: true,
				message: "Invalid credentials",
				data: undefined,
			};
		}

		// check access
		if (!user.access) {
			return {
				status: 403,
				error: true,
				message: "Access Denied",
				data: undefined,
			};
		}

		// account delete
		if (user.delete) {
			return {
				status: 204,
				error: true,
				message: "Account Deleted!",
				data: undefined,
			};
		}

		// Generate and return a token for authentication
		const token = generateAuthToken(user);

		return {
			status: 200,
			error: false,
			message: undefined,
			data: { token, user },
		};
	} catch (error) {
		return {
			status: 500,
			error: true,
			message: "Internal server error",
			data: undefined,
		};
	}
};

/**
 * Create user account.
 *
 * @param {Object} data - User data for creating an account.
 * @param {string} data.email - Email address of the user.
 * @param {string} data.newPassword - New password for the user account.
 * @param {string} data.pic - Profile picture URL of the user.
 * @param {string} data.name - Name of the user.
 * @param {string} data.dob - Date of birth of the user.
 * @param {number} data.age - Age of the user.
 * @param {string} data.phoneNo - Phone number of the user.
 * @param {string} data.place - Place of residence of the user.
 * @param {string} data.education - Education details of the user.
 * @param {string} data.address - Address of the user.
 * @returns {Object} Response indicating the status, error, message, and data of the account creation process.
 */
exports.createAccount = async (data) => {
	try {
		// Destructure the data object to get the required properties
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
		} = data;

		// Check if the user already exists
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return {
				status: 409,
				error: true,
				message: "User already exists",
				data: undefined,
			};
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
			phoneNumber: phoneNo,
			place,
			education,
			contactDetails: address,
			access: true,
		});

		await newUser.save();

		await newUser.save();

		// Generate and return a token for authentication
		const token = generateAuthToken(newUser);

		return {
			status: 200,
			error: false,
			message: undefined,
			data: {
				token,
				name,
				email,
				pic,
				address: address,
				phoneNumber: phoneNo,
				phoneNo,
				place,
				education,
				dob,
				age,
				access: true,
				contactDetails: address,
			},
		};
	} catch (error) {
		return {
			status: 500,
			error: true,
			message: "Internal server error",
			data: undefined,
		};
	}
};

/**
 * Update user password.
 *
 * @param {Object} data - Data required for updating the password.
 * @param {string} data.userId - ID of the user.
 * @param {string} data.password - New password for the user.
 * @returns {Object} Response indicating the status, error, message, and data of the password update process.
 */
exports.updatePassword = async (data) => {
	try {
		const { userId, password } = data;

		// Find the user by ID
		const user = await User.findById(userId);

		if (!user) {
			return {
				status: 404,
				error: true,
				message: "User not found",
				data: undefined,
			};
		}

		// Hash the password
		const hashedPassword = await bcrypt.hash(password, 10);
		user.password = hashedPassword;
		await user.save();

		// Generate and return a token for authentication
		const token = generateAuthToken({
			_id: user._id,
			email: user.email,
			password: hashedPassword,
		});

		return {
			status: 200,
			error: false,
			message: "Password updated successfully",
			data: { token },
		};
	} catch (error) {
		return {
			status: 500,
			error: true,
			message: "Internal server error",
			data: undefined,
		};
	}
};

/**
 * Update user password.
 *
 * @param {Object} data - Data required for updating the password.
 * @param {string} data.email - email of the user.
 * @param {string} data.dob - Dob of the user.
 * @param {string} data.password - New password for the user.
 * @returns {Object} Response indicating the status, error, message, and data of the password update process.
 */
exports.forgotPassword = async (data) => {
	try {
		const { email, dob, password } = data;

		// Find the user by ID
		const user = await User.findOne({ email });

		if (!user) {
			return {
				status: 404,
				error: true,
				message: "User not found",
				data: undefined,
			};
		}

		if (user.dob !== dob) {
			return {
				status: 409,
				error: true,
				message: "Dob don't match",
				data: undefined,
			};
		}

		// check access
		if (!user.access) {
			return {
				status: 403,
				error: true,
				message: "Access Denied",
				data: undefined,
			};
		}

		// account delete
		if (user.delete) {
			return {
				status: 204,
				error: true,
				message: "Account Deleted!",
				data: undefined,
			};
		}

		// Hash the password
		const hashedPassword = await bcrypt.hash(password, 10);

		user.password = hashedPassword;
		await user.save();

		// Generate and return a token for authentication
		const token = generateAuthToken({
			_id: user._id,
			email: user.email,
			password: hashedPassword,
		});

		return {
			status: 200,
			error: false,
			message: "Password updated successfully",
			data: { token },
		};
	} catch (error) {
		return {
			status: 500,
			error: true,
			message: "Internal server error",
			data: undefined,
		};
	}
};

/**
 * Edit user account.
 *
 * @param {Object} data - Data required for editing the user account.
 * @param {string} data.userId - ID of the user.
 * @param {string} data.name - Updated name of the user.
 * @param {string} data.education - Updated education details of the user.
 * @param {string} data.contactDetails - Updated contact details of the user.
 * @param {string} data.dob - Updated date of birth of the user.
 * @param {number} data.age - Updated age of the user.
 * @param {string} data.place - Updated place of the user.
 * @returns {Object} Response indicating the status, error, message, and data of the process.
 */
exports.editAccount = async (data) => {
	try {
		const { userId, name, education, contactDetails, dob, age, place } = data;

		// Find the user by ID
		const user = await User.findById(userId);

		if (!user) {
			return {
				status: 404,
				error: true,
				message: "User not found",
				data: undefined,
			};
		}

		// Update the user account with the provided data
		user.name = name;
		user.education = education;
		user.contactDetails = contactDetails;
		user.dob = dob;
		user.age = age;
		user.place = place;
		await user.save();

		return {
			status: 200,
			error: false,
			message: "User account updated successfully",
			data: { message: "User account updated successfully" },
		};
	} catch (error) {
		return {
			status: 500,
			error: true,
			message: "Internal server error",
			data: undefined,
		};
	}
};

/**
 * Edit user account.
 *
 * @param {Object} data - Data required for editing the user account.
 * @param {string} data.userId - ID of the user.
 * @param {string} data.name - Updated name of the user.
 * @param {string} data.education - Updated education details of the user.
 * @param {string} data.contactDetails - Updated contact details of the user.
 * @param {string} data.dob - Updated date of birth of the user.
 * @param {number} data.age - Updated age of the user.
 * @param {string} data.place - Updated place of the user.
 * @returns {Object} Response indicating the status, error, message, and data of the process.
 */
exports.editAdminAccount = async (data) => {
	try {
		const { userId, name, education, contactDetails, dob, age, place, pic } =
			data;

		// Find the user by ID
		const user = await User.findById(userId);

		if (!user) {
			return {
				status: 404,
				error: true,
				message: "User not found",
				data: undefined,
			};
		}

		// Update the user account with the provided data
		user.name = name;
		user.education = education;
		user.contactDetails = contactDetails;
		user.dob = dob;
		user.age = age;
		user.place = place;
		user.pic = pic;

		await user.save();

		return {
			status: 200,
			error: false,
			message: "User account updated successfully",
			data: { message: "User account updated successfully" },
		};
	} catch (error) {
		return {
			status: 500,
			error: true,
			message: "Internal server error",
			data: undefined,
		};
	}
};

/**
 * Edit user access.
 *
 * @param {Object} data - Data required for editing the user access.
 * @param {string} data.userId - ID of the user.
 * @param {boolean} data.access - Updated access status of the user.
 * @returns {Object} Response indicating the status, error, message, and data of the user access update process.
 */
exports.editAccess = async (data) => {
	try {
		const { userID, access } = data;

		// Find the user by ID
		const user = await User.findById(userID);
		if (!user) {
			return {
				status: 404,
				error: true,
				message: "User not found",
				data: undefined,
			};
		}

		// Update the user access with the provided data
		if (access != user.access) {
			user.access = access;
			user.status = access ? "blocked" : "inactive";
			await user.save();
		}

		return {
			status: 200,
			error: false,
			message: "User access updated successfully",
			data: { message: "User account updated successfully" },
		};
	} catch (error) {
		return {
			status: 500,
			error: true,
			message: "Internal server error",
			data: undefined,
		};
	}
};

/**
 * Delete user account
 *
 * @param {Object} data - Data required for delete user account.
 * @param {string} data.userId - ID of the user.
 * @returns {Object} Response indicating the status, error, message, and data of the process.
 */
exports.deleteAccount = async (data) => {
	try {
		// Destructure the data object to get the required properties
		const { userId } = data;

		// Find the user by ID
		const user = await User.findById(userId);

		// If user not found, return error
		if (!user) {
			return {
				status: 404,
				message: "User not found",
				error: true,
				data: undefined,
			};
		}

		if (user.delete == false) {
			user.delete = true;
			user.access = false;
			user.status = "deleted";
			await user.save();
		}

		return {
			status: 200,
			error: false,
			message: "User account deleted successfully",
			data: { message: "User account deleted successfully" },
		};
	} catch (error) {
		return {
			status: 500,
			error: true,
			message: "Internal server error",
			data: undefined,
		};
	}
};

/**
 * Edit user pic.
 *
 * @param {Object} data - Data required for editing the user account.
 * @param {string} data.userId - ID of the user.
 * @param {string} data.pic - Updated profile pic of the user.
 * @returns {Object} Response indicating the status, error, message, and data of the process.
 */
exports.editAccountPic = async (data) => {
	try {
		const { userId, pic } = data;

		// Find the user by ID
		const user = await User.findById(userId);

		if (!user) {
			return {
				status: 404,
				error: true,
				message: "User not found",
				data: undefined,
			};
		}
		user.pic = pic;

		await user.save();

		return {
			status: 200,
			error: false,
			message: "User account updated successfully",
			data: { message: "User account updated successfully" },
		};
	} catch (error) {
		return {
			status: 500,
			error: true,
			message: "Internal server error",
			data: undefined,
		};
	}
};

/**
 *
 * @returns {Object} Response indicating the status, error, message, and data of the process.
 */
exports.getAllUsers = async () => {
	try {
		const users = await User.find();
		const userData = [];

		for (const user of users) {
			const likedBooks = await Book.find({ likes: user._id });
			const requestedBooks = await Book.find({ request: user._id });
			const rentedBooks = await Book.find({ "rented.userid": user._id });
			const boughtBooks = await Book.find({ "buyers.userid": user._id });

			userData.push({
				_id: user._id,
				password: user.password,
				name: user.name,
				phoneNumber: user.phoneNumber,
				dob: user.dob,
				pic: user.pic,
				place: user.place,
				age: user.age,
				email: user.email,
				education: user.education,
				contactDetails: user.contactDetails,
				access: user.access,
				status: user.status,
				delete: user.delete,
				booksRented: user.booksRented,
				created: user.created,
				lastLogin: user.lastLogin,
				status: user.status,
				updated: user.updated,
				likedBooks: likedBooks,
				requestedBooks: requestedBooks,
				rentedBooks: rentedBooks,
				boughtBooks: boughtBooks,
			});
		}

		return {
			status: 200,
			error: false,
			message: undefined,
			data: userData,
		};
	} catch (error) {
		return {
			status: 500,
			error: true,
			message: "Internal server error",
			data: undefined,
		};
	}
};

/**
 * get user.
 *
 * @param {Object} data - Data required for the user id.
 * @param {string} data.userId - ID of the user.
 * @returns {Object} Response indicating the status, error, message, and data of the process.
 */
exports.getUserData = async (data) => {
	const { userId } = data;
	try {
		const user = await User.findById(userId);
		if (!user) {
			return {
				status: 404,
				error: true,
				message: "User not found",
				data: undefined,
			};
		}

		const likedBooks = await Book.find({ likes: userId });
		const requestedBooks = await Book.find({ request: userId })
			.populate("rented.user", "name pic email")
			.populate("buyers.user", "name stars rentDate returnDate");

		const rentedBooks = await Book.find({ "rented.user": userId }).populate(
			"rented.user",
			"name pic email"
		);

		const boughtBooks = await Book.find({ "buyers.user": userId }).populate(
			"buyers.user",
			"name pic stars rentDate returnDate"
		);

		const userData = {
			_id: user._id,
			password: user.password,
			name: user.name,
			phoneNumber: user.phoneNumber,
			dob: user.dob,
			pic: user.pic,
			place: user.place,
			age: user.age,
			email: user.email,
			education: user.education,
			contactDetails: user.contactDetails,
			access: user.access,
			delete: user.delete,
			booksRented: user.booksRented,
			created: user.created,
			lastLogin: user.lastLogin,
			status: user.status,
			updated: user.updated,
			likedBooks: likedBooks,
			requestedBooks: requestedBooks,
			rentedBooks: rentedBooks,
			boughtBooks: boughtBooks,
		};
		return {
			status: 200,
			error: false,
			message: undefined,
			data: userData,
		};
	} catch (error) {
		return {
			status: 500,
			error: true,
			message: "Internal server error",
			data: undefined,
		};
	}
};
