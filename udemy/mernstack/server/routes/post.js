const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const Post = mongoose.model("Post");


// @route   POST api/allposts
// @desc    Get all posts from following users and current user
// @access  Private
router.get("/allposts", requireLogin, (req, res) => {
  Post.find({ $or: [{ postedBy: req.user.id }, { postedBy: req.user.following }] })
    .populate("postedBy", "_id name profile_picture")
    .populate("comments.postedBy", "_id name profile_picture")
    .then((posts) => {
      res.json({ posts: posts });
    })
    .catch((err) => {
      console.log(err);
    });
});

// @route   POST api/createpost
// @desc    Create a post 
// @access  Private
router.post("/createpost", requireLogin, (req, res) => {
  const { title, body, photo } = req.body;
  if (!title || !body || !photo) {
    return res.status(422).json({ msg: "Please enter all fields" });
  }
  const post = new Post({
    title,
    body,
    photo,
    postedBy: req.user._id,
  });

  post
    .save()
    .then((result) => {
      res.json({
        message: "Post created successfully",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

// @route   POST api/myposts
// @desc    Get all posts from a specific user
// @access  Private
router.get("/myposts", requireLogin, (req, res) => {
  Post.find({ postedBy: req.user._id })
    .populate("postedBy", "_id name")
    .then((posts) => {
      res.json({ posts: posts });
    })
    .catch((err) => {
      console.log(err);
    });
});

// @route   POST api/like
// @desc    Like a post
// @access  Private
router.put("/like", requireLogin, (req, res) => {
  Post.findByIdAndUpdate(
    req.body.postId,
    {
      $push: { likes: req.user._id },
    },
    {
      new: true,
    }
  )
    .populate("comments.postedBy", "_id name")
    .populate("postedBy", "_id name")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      } else {
        res.json(result);
      }
    });
});

// @route   POST api/unlike
// @desc    Unlike a post
// @access  Private
router.put("/unlike", requireLogin, (req, res) => {
  Post.findByIdAndUpdate(
    req.body.postId,
    {
      $pull: { likes: req.user._id },
    },
    {
      new: true,
    }
  )
    .populate("comments.postedBy", "_id name")
    .populate("postedBy", "_id name")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      } else {
        res.json(result);
      }
    });
});

// @route   POST api/comment
// @desc    Comment on a post
// @access  Private
router.put("/comment", requireLogin, (req, res) => {
  const comment = {
    text: req.body.text,
    postedBy: req.user._id,
  };

  Post.findByIdAndUpdate(
    req.body.postId,
    {
      $push: { comments: comment },
    },
    {
      new: true,
    }
  )
    .populate("comments.postedBy", "_id name")
    .populate("postedBy", "_id name")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      } else {
        res.json(result);
      }
    });
});

// @route   POST api/deletecomment/:postId
// @desc    Delete a comment
// @access  Private
// @params  postId
router.delete("/deletepost/:postId", requireLogin, (req, res) => {
  Post.findOne({ _id: req.params.postId })
    .populate("postedBy", "_id")
    .exec((err, post) => {
      if (err || !post) {
        return res.status(422).json({ error: err });
      }
      if (post.postedBy._id.toString() === req.user._id.toString()) {
        post
          .remove()
          .then(result => res.json(result))
          .catch((err) => res.status(500).json({ error: err }));
      } else {
        return res.status(422).json({ error: "You are not authorized" });
      }
    });
});

module.exports = router;
