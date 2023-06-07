/**
 * Send email
 *
 * @project : MI LIBRO
 * @version : 1.0.2
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abinas, Saran, Yasir
 * @created : 2023-05-17 10:04:13
 * @modified : 2023-06-07 21:15:30
 * @editor : Ajayos
 * @file : Email.js
 * @path : /lib/Email.js
 *
 * Description: This file define the Email send function.
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abinas, Saran, Yasir)
 *
 */
const nodemailer = require("nodemailer");

// Create a transporter using your email service provider's SMTP configuration
const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 465,
	secure: true,
	auth: {
		user: process.env.GMAIL_USER,
		pass: process.env.GMAIL_PASS,
	},
});
// Function to send an email
const sendEmail = async (to, subject, text) => {
	try {
		// Define the email options
		const mailOptions = {
			from: process.env.GMAIL_USER,
			to,
			subject,
			text,
		};

		// Send the email
		const info = await transporter.sendMail(mailOptions);
		console.log("Email sent:", info.messageId);
	} catch (error) {
		console.error("Error sending email:", error);
	}
};

module.exports = sendEmail;
