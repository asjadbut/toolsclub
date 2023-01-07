const path = require("path");

const jpg_svgToPngFilter = function (req, file, callback) {
    var ext = path.extname(file.originalname);
    if (ext != ".jpg" && ext != ".svg") {
        return callback("This extension is not supported");
    }
    callback(null, true);
};

module.exports = { jpg_svgToPngFilter }