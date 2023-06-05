/**
 * Bookstore Library App
 *
 * @project : MI LIBRO
 * @version : 1.0.1
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abinas, Saran, Yasir
 * @created : 2023-05-17 10:02:42
 * @modified : 2023-05-20 15:25:38
 * @editor : Ajayos
 * @file : index.js
 * @path : /index.js
 *
 * Description: Main entry point for the Bookstore Library App backend.
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abinas, Saran, Yasir)
 */

// Import dependencies
const os = require("os");
const fs = require("fs");
const path = require("path");
const http = require("http");
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const socketIO = require("socket.io");
const { v4: uuidv4 } = require("uuid");
const bodyParser = require("body-parser");
const {  log } = require("@ajayos/nodelogger");

// Import local modules
const setupLogger = require("./lib/Logger");
const apiRouter = require("./router");
const { connectDB, login } = require("./Models");
const errorHandler = require("./middleware/errorHandler");
// config env file
dotenv.config();

// Define
const SERVER_PORT = process.env.PORT || 3000;
const publicPath = path.join(__dirname, "/Public");

// Set up the logger
setupLogger();

// connect to Database
connectDB(process.env.MONGO_URL);
//require('./Models')

// Create Express app
const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
	pingTimeout: 60000,
});

// Setup app for the data handling
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// setup api
// v1 api
app.use("/api/v1/", apiRouter);
app.use(express.static(path.join(__dirname, "/client/build")));
app.get("/Public/static/images/img.svg", (req, res) => {
	res.sendFile(path.join(publicPath, "/static/images/img.svg"));
});
app.get("/Public/static/images/500.svg", (req, res) => {
	res.sendFile(path.join(publicPath, "/static/images/500.svg"));
});
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

// Error handler middleware
app.use(errorHandler);

let users = [];

// Set up Socket.IO for real-time updates
io.on("connection", (socket) => {
	// Add new user to the users list
	users.push(socket);

	// Emit the number of online users to all clients
	io.emit("online", users.length);
	//io.emit("notification", { title: "New user joined", Avatar: "https://github.com/Ajayos.png",  });

	socket.on("userOnline", async (data) => {
		if (!data) return;
		if (!data.user) return;
    if(data.user == "undefined") return;
		const { user, status, token, pic } = data;
		users[socket.id] = user;
    users[socket.id].pic = pic;
    io.emit("notification", { title: "Ajay o s user joined", Avatar: pic, createdAt: new Date(), isUnRead: true, });
		//try {
		//	await login.findOneAndUpdate(
		//		{ user: user },
		//		{ status: "active" },
		//		{ upsert: true } // Create a new user if it doesn't exist
		//	);
		//	// Update the user's status and token in the database
		//} catch (error) {
		//	// Handle any errors that occur during the update
		//	console.error(error);
		//}
	});

	// Handle client disconnection
	socket.on("disconnect", () => {
		// Remove disconnected user from the users list
		users.splice(users.indexOf(socket), 1);

		// Emit the updated number of online users to all clients
		io.emit("online", users.length);
		//try {
		//	// Set user status to "inactive" on disconnection
		//	const userId = users[socket.id]; // Assuming socket.id represents the user ID
		//	login
		//		.findOneAndUpdate(
		//			{ user: userId },
		//			{ status: "inactive" },
		//			{ upsert: true } // Create a new user if it doesn't exist
		//		)
		//		.then(() => {
		//			//console.log("User status set to inactive");
		//		})
		//		.catch((error) => {
		//			//console.error("Error setting user status:", error);
		//		});
		//} catch (error) {
		//	console.error(error);
		//}
	});
});

// Increase the count every 3 seconds and emit it to all clients
setInterval(() => {
	const userIDs = users.map((user) => user.id);
	io.emit("online", userIDs.length);
}, 8000);

// Start the server
server.listen(SERVER_PORT, () => {
	// Take ip and port from the server
	log(`Server running on port ${SERVER_PORT}`, 'i');
	log(`Server is running at http://127.0.0.1:${SERVER_PORT}`, 'i');
	//const interfaces = os.networkInterfaces();
	//const addresses = interfaces['Wireless']
	//  .filter((iface) => iface.family === 'IPv4')
	//  .map((iface) => iface.address);
	//
	//addresses.forEach((address) => {
	//  log(`Server is running at http://${address}:${SERVER_PORT}`);
	//});
	log(`Open above url to view the app :)`, 'i');
});
