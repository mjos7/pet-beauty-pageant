var multer = require("multer");
var upload = multer({ dest: "uploads/" }); 
const fs = require("fs");
 const cloudinary = require("cloudinary").v2;
require('dotenv').config();

const router = require('express').Router();

// dotenv.config();
console.log(cloudinary.config());


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

module.exports = router;