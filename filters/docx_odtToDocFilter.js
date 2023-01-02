const path = require("path");

const docx_odtToDocFilter = function (req, file, callback) {
    var ext = path.extname(file.originalname);
    if (ext != ".docx" && ext != ".odt") {
        return callback("This extension is not supported");
    }
    callback(null, true);
};

module.exports = { docx_odtToDocFilter }