const path = require("path");

const doc_docxToTxtFilter = function (req, file, callback) {
    var ext = path.extname(file.originalname);
    if (ext != ".docx" && ext != ".doc") {
        return callback("This extension is not supported");
    }
    callback(null, true);
};

module.exports = { doc_docxToTxtFilter }