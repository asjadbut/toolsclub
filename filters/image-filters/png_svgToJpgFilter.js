const path = require("path");

const png_svgToJpgFilter = function (req, file, callback) {
    var ext = path.extname(file.originalname);
    if (ext != ".png" && ext != ".svg") {
        return callback("This extension is not supported");
    }
    callback(null, true);
};

module.exports = { png_svgToJpgFilter }