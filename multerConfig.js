const multer = require("multer");
const path = require("path")

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploaded_files");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now() + '-' + Math.round(Math.random() * 1E9)}${ext}`);
  },
});

module.exports = { multerStorage }