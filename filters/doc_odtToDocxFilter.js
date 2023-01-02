const path = require("path");

const doc_odtToDocxFilter = function (req, file, callback) {
    var ext = path.extname(file.originalname);
    if (ext != ".doc" && ext != ".odt") {
        return callback("This extension is not supported");
    }
    callback(null, true);
};

module.exports = { doc_odtToDocxFilter }