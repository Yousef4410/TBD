require("dotenv").config();
const express = require("express");
// const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const { auth } = require("express-openid-connect");
const path = require("path");

// relative imports

// db uri, mongodb connection string
const uri = process.env.MONGODB_URI;

const app = express();
const port = process.env.PORT || 5000;

// for production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

app.use(cors());
// app.use(morgan("dev"));
// body parser included in express
app.use(express.json());
// handle form submissions / urlencoded data
app.use(express.urlencoded({ extended: false }));
app.use;

app.use(
  auth({
    auth0Logout: true,
    authRequired: false,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    secret: process.env.SECRET,
    idpLogout: true,
  })
);


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Connected");
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

//const usersRouter = require("./routes/users");
//app.use("/users", usersRouter);

const postsRouter = require("./routes/posts");
app.use("/posts",postsRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));
