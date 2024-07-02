const path = require('path');
const multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Absolute path to the "uploads" folder
    const absolutePath = path.join(__dirname, '..', 'uploads');
    cb(null, absolutePath);
  },
  //Renaming the file with currnet timestamp and extension to make it unique
  filename: function (req, file, cb) {
    let ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

const upload = multer({storage});
module.exports = upload;
