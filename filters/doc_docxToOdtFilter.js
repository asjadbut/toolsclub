const path = require("path");

const doc_docxToOdtFilter = function (req, file, callback) {
    var ext = path.extname(file.originalname);
    if (ext != ".doc" && ext != ".docx") {
        return callback("This extension is not supported");
    }
    callback(null, true);
};

module.exports = { doc_docxToOdtFilter }