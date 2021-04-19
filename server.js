require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { auth } = require("express-openid-connect");
const path = require("path");
const passport = require("passport");

// relative imports

// db uri, mongodb connection string
const uri = process.env.MONGODB_URI;

const app = express();
const port = process.env.PORT || 5000;

const server = app.listen(port, () => 
console.log(`Server running on port ${port}`));

const io = require("socket.io").listen(server);

// for production
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("frontend/build"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
//   });
// }


app.use(cors());
// body parser included in express
app.use(express.json());
// handle form submissions / urlencoded data
app.use(express.urlencoded({ extended: false }));

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
  res.send("Testing");
});


// Passport middleware
app.use(passport.initialize());
// Passport config
//require("./config/passport")(passport);

// Assign socket object to every request
app.use(function (req, res, next) {
  req.io = io;
  next();
});

const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

const postsRouter = require("./routes/posts");
app.use("/posts", postsRouter);

const messages = require("./routes/messages");
app.use("/messages", messages);


