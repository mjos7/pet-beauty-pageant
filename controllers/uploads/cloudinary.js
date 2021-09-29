// var multer = require("multer");
// var upload = multer({ dest: "uploads/" });
// const fs = require("fs");
require("dotenv").config();

// const router = require('express').Router();

// dotenv.config();
// console.log(cloudinary.config());

// router.post("/upload-images", upload.single("file"), async (req, res) => {
//   console.log(req);
//     const upload = await cloudinary.uploader.upload(
//       req.file.path,
//       (error, result) => {
//         if (error) console.error(error);
//         return result;
//       }
//     );
//     res.json(upload);
// });

// module.exports = router;

const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "Explorer",
    allowedFormats: ["jpeg", "png", "jpg"],
  },
});

module.exports = {
  cloudinary,
  storage,
};