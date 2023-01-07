const path = require("path");

const docxToPdfFilter = function (req, file, callback) {
    var ext = path.extname(file.originalname);
    if (ext != ".docx" && ext != ".doc" && ext != ".odt") {
        return callback("This extension is not supported");
    }
    callback(null, true);
};

module.exports = { docxToPdfFilter }