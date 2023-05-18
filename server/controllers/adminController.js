/**
 * Admin controller for handling admin-related operations.
 * @module controllers/adminController
 */

const Admin = require('../models/Admin');
const bcrypt = require('bcrypt');

/**
 * Controller function to handle admin login.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The response object.
 * @throws {Error} If an error occurs while processing the request.
 */
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the admin by username
    const admin = await Admin.findOne({ username });

    // If admin not found, return error
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    // Compare the provided password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, admin.password);

    // If passwords don't match, return error
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate and return a token for authentication
    const token = generateAuthToken(admin);

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
