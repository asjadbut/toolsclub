const path = require("path");

const toArchiveFilter = function (req, file, callback) {
    var ext = path.extname(file.originalname);
    if (ext == "abcc") {
        return callback("This extension is not supported");
    }
    callback(null, true);
};

module.exports = { toArchiveFilter }