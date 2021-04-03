const express = require("express");
const router = express.Router();
const Post = require('../models/Post');

// get all posts
 router.get('/get', async (req,res) => {
  try{
    const postMessages = await Post.find();
    res.status(200).json(postMessages);
  }
  catch(error) {
  res.status(404).json({message: error.message});
}
});

 router.post('/', async (req, res) => {
   try{
     const postMessages = await PM.Posts;
   }
   catch(error){
     res.status(404).json({message:error.message});
   }
    res.send('Post Creation');
});

module.exports = router;
