const express = require("express");
const path = require("path");
const publicpath = path.join(__dirname, "../public");
const app = express();
app.use(express.static(publicpath));