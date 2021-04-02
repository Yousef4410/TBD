const express = require("express");
const router = express.Router();
const PM = require('../models/Post.js');

 router.get('/', async (req,res) => {
  try{
    const postMessages = await PM.PostMessage.find();
    res.status(200).json(postMessages);
  }
  catch(error) {
  res.status(404).json({message: error.message});
}
});

 router.post('/', (req, res) => {
    res.send('Post Creation');
});

module.exports = router;
