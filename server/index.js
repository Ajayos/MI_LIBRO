/**
 * Main entry point for the home page.
 *
 * @project : MI LIBRO
 * @version : 1.0.1
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abhinas, Saran, Yasir
 * @created : 2023-05-17 10:02:42
 * @modified : 2023-05-17 21:34:08
 * @editor : Ajayos
 * @file : index.js
 * @path : /
 *
 * Description: This is the main entry point for the home page. It initializes Express, sets up the routes, and uses Socket.IO for real-time updates.
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abhinas, Saran, Yasir)
 */

// Import dependencies
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
//const apiRouter = require("./Routers");
const { connectDB } = require("./Models");

// config env file
dotenv.config();

// Define
const SERVER_PORT = process.env.PORT || 3000;
const publicPath = path.join(__dirname, "Public");


// Set up the logger
setupLogger();

// connect to Database
connectDB(process.env.MONGO_URL);

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
//app.use("/api/v1/", apiRouter);

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
  const { address, port } = server.address();
  log(`Server running on port ${port}`);
  log(`Server is running at http://127.0.0.1:${port}`);
  log(`Server is running at http://${address}:${port}`);
  log(`Open above url to view the app :)`);
});
