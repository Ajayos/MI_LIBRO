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
const schedule = require('node-schedule');
const { log } = require("@ajayos/nodelogger");

// Import local modules
//const setupLogger = require("./lib/Logger");
const apiRouter = require("./Routers");
const { connectDB, User, Book,  } = require("./Models");
const errorHandler = require("./middleware/errorHandler");
const sendEmail = require("./lib/Email");
// config env file
dotenv.config();

// Define
const SERVER_PORT = process.env.PORT || 3000;
const publicPath = path.join(__dirname, "/Public");

// Set up the logger
//setupLogger();

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
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// setup api
// v1 api
app.use("/", apiRouter);
app.use(express.static(publicPath));

// Error handler middleware
app.use(errorHandler);




const users = {}; // Object to store online users

// Set up Socket.IO for real-time updates
io.on("connection", (socket) => {
  // Add new user to the users list and notify other users
  socket.on("userOnline", async (data) => {
    if (!data || !data.user || data.user === "undefined") return;

    const { user, token, pic } = data;

    // Add the user to the users object with socket ID as the key
    users[socket.id] = { user, pic };

    // Emit a notification to all connected clients about the new user
    io.emit("notification", {
      title: `${user.name} has joined`,
      avatar: pic,
      createdAt: new Date(),
      isUnread: true,
    });

    // Update the user's status in the database (assuming you have a model named 'User')
    try {
      const updatedUser = await User.findByIdAndUpdate(
        user._id,
        { status: "active" },
        { new: true }
      );
      if (updatedUser) {
        // Emit the updated user data to the current client
        socket.emit("userData", updatedUser);
      }
    } catch (error) {
      console.error(error);
    }
  });

  // Handle client disconnection
  socket.on("disconnect", async() => {
    // Get the user associated with the disconnected socket
    const user = users[socket.id];

    // Remove the user from the users object
    delete users[socket.id];

    // Emit the updated number of online users to all clients
    io.emit("online", Object.keys(users).length);

    if (user) {
      // Update the user's status in the database (assuming you have a model named 'User')
      try {
        const updatedUser = await User.findByIdAndUpdate(
          user._id,
          { status: "inactive" },
          { new: true }
        );
        if (updatedUser) {
          // Emit the updated user data to the current client
          socket.emit("userData", updatedUser);
        }
      } catch (error) {
        console.error(error);
      }
    }
  });
});

// Function to check online users and update their status
const checkOnlineUsers = async() => {
  for (const socketId in users) {
    const user = users[socketId].user;
    // Check if the user is online in the socket.io
    if (!io.sockets.sockets[socketId]) {
      // User is offline, update their status in the database (assuming you have a model named 'User')
      try {
        const updatedUser = await User.findByIdAndUpdate(
          user._id,
          { status: "offline" },
          { new: true }
        );
        if (updatedUser) {
          // Emit the updated user data to the current client
          io.emit("userData", updatedUser);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
};

// Run the checkOnlineUsers function every 30 minutes (adjust the interval as needed)
setInterval(checkOnlineUsers, 30 * 60 * 1000);
// Function to send book rent messages
const sendRentMessages = async () => {
  // Logic to retrieve books nearing the completion of their rental period
  const books = await Book.find({ rentEndDate: { $gte: new Date() } });

  for (const book of books) {
    const daysRemaining = Math.ceil(
      (book.rentEndDate - new Date()) / (1000 * 60 * 60 * 24)
    );

    // Check if the book is 25 days away from completion
    if (daysRemaining === 25) {
      const message = `Your rented book "${book.title}" will expire in 5 days.`;

      // Send the message to the user's email (assuming you have a function named 'sendEmail')
      sendEmail(book.user.email, "Rent Expiration Notification", message);

      // Check if the user associated with the book is online
      const userSocket = Object.values(users).find(
        (u) => u.user._id === book.user._id
      );
      if (userSocket) {
        // Send a notification message through Socket.IO
        const notification = {
          title: "Rent Expiration",
          message: message,
          createdAt: new Date(),
          isUnread: true,
        };
        io.to(userSocket.socketId).emit("notification", notification);
      }
    }

    // Check if the book is 30 days away from completion
    if (daysRemaining === 30) {
      const message = `Your rented book "${book.title}" will expire in 1 day. Please return the book to avoid late fees.`;

      // Send the message to the user's email
      sendEmail(book.user.email, "Rent Expiration Warning", message);

      // Check if the user associated with the book is online
      const userSocket = Object.values(users).find(
        (u) => u.user._id === book.user._id
      );
      if (userSocket) {
        // Send a notification message through Socket.IO
        const notification = {
          title: "Rent Expiration Warning",
          message: message,
          createdAt: new Date(),
          isUnread: true,
        };
        io.to(userSocket.socketId).emit("notification", notification);
      }
    }

    // Check if the book is overdue by 30 days or more
    if (daysRemaining < 0) {
      const daysOverdue = Math.abs(daysRemaining);
      const lateFee = daysOverdue * 1; // Assuming late fee is 1 rs per day

      const message = `Your rented book "${book.title}" is ${daysOverdue} days overdue. Please return the book and pay the late fee of ${lateFee} rs.`;

      // Send the message to the user's email
      sendEmail(book.user.email, "Rent Overdue", message);

      // Check if the user associated with the book is online
      const userSocket = Object.values(users).find(
        (u) => u.user._id === book.user._id
      );
      if (userSocket) {
        // Send a notification message through Socket.IO
        const notification = {
          title: "Rent Overdue",
          message: message,
          createdAt: new Date(),
          isUnread: true,
        };
        io.to(userSocket.socketId).emit("notification", notification);
      }
    }
  }
};

// Run the sendRentMessages function every day at a specific time (adjust the time as needed)
const sendRentMessagesJob = schedule.scheduleJob("0 0 * * *", sendRentMessages);

// Start the server
server.listen(SERVER_PORT, () => {
  log(`Server running on port ${SERVER_PORT}`, "i");
  log(`Server is running at http://127.0.0.1:${SERVER_PORT}`, "i");
  log(`Open above url to view the app :)`, "i");
});
