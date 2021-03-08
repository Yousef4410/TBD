require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const MongoClient = require("mongodb").MongoClient;

// relative imports
// db uri, mongodb connection string
const uri = process.env.MONGODB_URI;

const app = express();
const port = process.env.PORT || "5000";

app.use(cors());
// body parser included in express
app.use(express.json());

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Connected");
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
