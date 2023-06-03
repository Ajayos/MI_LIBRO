const path = require("path");
const fs = require("fs");

const dir = path.join(__dirname, "/");
const Model = path.join(dir, "/Model");
const middleware = path.join(dir, "/middleware");
const lib = path.join(dir, "/lib");
const router = path.join(dir, "/router");
const controllers = path.join(dir, "/controllers")

module.exports = {
    _: __dirname,
    dir,
    Model,
    middleware,
    lib,
    router,
    controllers
}