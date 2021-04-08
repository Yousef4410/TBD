const express = require("express");
var app = express();
const router = express.Router();
const Post = require("../models/Post");
const { validatePostInput } = require("../util/post_valid");
const jwtCheck = require("../util/check-auth");
var bodyParser = require("body-parser");
var multer = require("multer");
var fs = require("fs");
var path = require("path");

// get all posts
router.get("/get", async (req, res) => {
  try {
    const postMessages = await Post.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// create posts
router.post("/create", async (req, res) => {
  let { title, description, price, location, contact, user } = req.body;
  const { valid, errors } = validatePostInput(title, description, price);
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.set("view engine", "ejs");

  var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads");
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + "-" + Date.now());
    },
  });

  var upload = multer({ storage: storage });

  app.get("/", (req, res) => {
    Post.find({}, (err, items) => {
      if (err) {
        console.log(err);
        res.status(500).send("An error occurred", err);
      } else {
        res.render("imagesPage", { items: items });
      }
    });
  });

  const post = new Post({
    title: title,
    description: description,
    price: price,
    location: location,
    contact: contact,
    user: user,
    image: {
      data: fs.readFileSync(
        path.join(__dirname + "/uploads/" + req.file.filename)
      ),
      contentType: "image/png",
    },
  });
  try {
    const newPost = await post.save();
    newIMG.image.data = fs.readFileSync(req.files.userPhoto.path);
    newIMG.image.contentType = "image/png";
    newIMG.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});
async function getPost(req, res, next) {
  let post;
  try {
    post = await Post.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ msg: "Cannot find post" });
    }
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
  res.user = post;
  next();
}
// delete posts
router.delete("/del/:id", getPost, async (req, res) => {
  try {
    await res.post.remove();
    res.json({ message: "Post deleted" });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

module.exports = router;
