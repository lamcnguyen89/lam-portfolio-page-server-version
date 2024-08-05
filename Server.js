// Create a simple Express Server for handling Web Requests
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const path = require('path');

const app = express();
app.use(bodyParser.json({ limit: "50mb" }));

// Connect Database
connectDB();

// Init Middleware
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "50mb",
    parameterLimit: 50000,
  })
);
//app.use(express.json({ extended: false }));

// Create a single endpoint to test if the server works
//app.get("/", (req, res) => res.send("API Running"));

// Define Routes
app.use("/api/user", require("./routes/api/user"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/profile", require("./routes/api/profile"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req,res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Take app variable and listen on a port
const PORT = process.env.PORT || 666;

app.listen(PORT, () =>
  console.log(`The Server of Darkness started on Port ${PORT}`)
);
