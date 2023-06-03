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

