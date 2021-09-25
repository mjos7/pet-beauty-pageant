var multer = require("multer");
var upload = multer({ dest: "uploads/" }); 
const fs = require("fs");
 const cloudinary = require("cloudinary").v2;
const dotenv = require('dotenv');

const router = require('express').Router();

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

// exports.uploads = (file, folder) => {
//     return new Promise(resolve => {
//         cloudinary.uploader.upload(file, (result) => {
//             resolve({
//                 url: result.url,
//                 id: result.public_id
//             })
//         },{
//             resource_type:"auto",
//             folder:folder
//         })
//     })
// }
router.post("/", upload.single("file"), async (req, res) => {
    const upload = await cloudinary.uploader.upload(
      req.file.path,
      (error, result) => {
        if (error) console.error(error);
        return result;
      }
    );
    res.json(upload);  
});

module.exports = router;