"use strict";
// src/index.js
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = process.env.PORT;
app.get("/", (req, res) => {
    res.send("TEST API");
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
// export the app for vercel serverless
module.exports = app;
