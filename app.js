const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const caseRoutes = require("./routes/caseRoutes");
const timeoutMiddleware = require("./Middleware/timeout");

const app = express();

// Middleware
app.use(express.json());
app.use(timeoutMiddleware);

// Routes
app.use("/api", caseRoutes);

app.get("/", (req, res) => {
  res.send("API working");
});

// Connect to MongoDB

mongoose
  .connect(process.env.MONGO_URI)

  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
