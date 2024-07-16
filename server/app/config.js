// Load the express module to create a web application

const express = require("express");
const cors = require("cors");
const path = require("path");
const apiRouter = require("./routers/api/router");

const app = express();

app.use(
  cors({
    origin: [
      process.env.CLIENT_URL, // keep this one, after checking the value in `server/.env`
    ],
  })
);

app.use(express.json());

app.use("/api", apiRouter);

// Path to files
const reactBuildPath = path.join(__dirname, "/../../client/dist");
const publicFolderPath = path.join(__dirname, "/../public");

app.use(express.static(reactBuildPath));
app.use("/assets", express.static(path.join(__dirname, "public")));

app.get("*.*", express.static(publicFolderPath, { maxAge: "1y" }));

module.exports = app;