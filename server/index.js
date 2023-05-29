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
const os = require('os');
const fs = require("fs");
const path = require("path");
const http = require("http");
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const socketIO = require("socket.io");
const { v4: uuidv4 } = require("uuid");
const bodyParser = require("body-parser");
const { log } = require("@ajayos/nodelogger");

// Import local modules
const setupLogger = require("./lib/logger");
const apiRouter = require("./router");
const { connectDB } = require("./Models");
const errorHandler = require("./middleware/errorHandler");
// config env file
dotenv.config();

// Define
const SERVER_PORT = process.env.PORT || 3000;
const publicPath = path.join(__dirname, "Public");

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
app.use(express.json()); // to accept json data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// setup api
// v1 api
app.use("/api/v1/", apiRouter);

// Default of get method for render the client
app.get("*", (req, res) => {
  // Serve the public folder if it exists, otherwise display "Server is running"
  if (fs.existsSync(publicPath)) {
    app.use(express.static(publicPath));
    res.sendfile(path.join(publicPath, "index.html"));
  } else {
    res.send("Server is running");
  }
});

// Error handler middleware
app.use(errorHandler);

// Set up Socket.IO for real-time updates
io.on("connection", (socket) => {
  // Handle client connection
  log("A new user has connected.");

  // Handle client disconnection
  socket.on("disconnect", () => {
    log("A user has disconnected.");
  });
});

// Start the server
server.listen(SERVER_PORT, () => {
  // Take ip and port from the server
  log(`Server running on port ${SERVER_PORT}`);
  log(`Server is running at http://127.0.0.1:${SERVER_PORT}`);
  //const interfaces = os.networkInterfaces();
  //const addresses = interfaces['Wireless']
  //  .filter((iface) => iface.family === 'IPv4')
  //  .map((iface) => iface.address);
//
  //addresses.forEach((address) => {
  //  log(`Server is running at http://${address}:${SERVER_PORT}`);
  //});
  log(`Open above url to view the app :)`);
});