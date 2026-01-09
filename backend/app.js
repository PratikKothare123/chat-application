const express = require("express");
const path = require("path");

const app = express();

// ✅ BODY PARSER
app.use(express.urlencoded({ extended: true }));

// ✅ STATIC FILES (THIS IS THE FIX)
app.use(express.static(path.join(__dirname, "../public")));

// ✅ EJS SETUP
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ✅ ROUTES
app.use("/", require("./routes/auth.routes"));
app.use("/", require("./routes/chat.routes"));

module.exports = app;
