const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Post, User, Comment, Vote } = require("../../models");
const withAuth = require("../../utils/auth");
// var multer = require("multer");
// var upload = multer({ dest: "uploads/" });
const fs = require("fs");
//  const cloudinary = require("cloudinary").v2;
require("dotenv").config();

const multer = require("multer");
const { storage } = require("../uploads/cloudinary");
const upload = multer({ storage });

// get all users
router.get("/", (req, res) => {
  console.log("======================");
  Post.findAll({
    attributes: [
      "id",
      "pet_type",
      "name",
      "image",
      "created_at",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)"
        ),
        "vote_count",
      ],
    ],
    order: [["created_at", "DESC"]],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "pet_type",
      "name",
      "image",
      "created_at",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)"
        ),
        "vote_count",
      ],
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post(
  "/",
  // /*withAuth*/ upload.fields([{ name: "image", maxCount: 1 }]),
  upload.single("image"),
  async (req, res) => {
    console.log(req.body)
    console.log(req.file);
    // const upload = await cloudinary.uploader.upload(
    //   req.file.path,
    //   (error, result) => {
    //     if (error) console.error(error);
    //     return result;
    //   }
    // );
    // console.log(upload);

    // link to image is in req.file.path
    console.log(req.file.path);

    // Post.create({
    //   name: req.body.name,
    //   pet_type: req.body.pet_type,
    //   user_id: req.session.user_id,
    //   image:
    // })
    // .then(dbPostData => res.json(dbPostData))
    // .catch(err => {
    //   console.log(err);
    //   res.status(500).json(err);
    // });
  }
);

router.put("/upvote", withAuth, (req, res) => {
  // make sure the session exists first
  if (req.session) {
    // pass session id along with all destructured properties on req.body
    Post.upvote(
      { ...req.body, user_id: req.session.user_id },
      { Vote, Comment, User }
    )
      .then((updatedVoteData) => res.json(updatedVoteData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});

router.put("/:id", withAuth, (req, res) => {
  Post.update(
    {
      name: req.body.name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", withAuth, (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;