const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const uri = process.env.MONGODB_URI;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

const port = process.env.PORT || "5000";
app.listen(port, () => console.log("Server running on port ${port}"));
