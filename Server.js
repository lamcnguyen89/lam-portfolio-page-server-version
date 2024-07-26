// Create a simple Express Server for handling Web Requests
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

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
app.get("/", (req, res) => res.send("API Running"));

// Define Routes
app.use("/api/user", require("./routes/api/user"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/profile", require("./routes/api/profile"));

// Take app variable and listen on a port
const PORT = process.env.PORT || 666;

app.listen(PORT, () =>
  console.log(`The Server of Darkness started on Port ${PORT}`)
);
