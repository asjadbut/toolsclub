const path = require("path");
const { DownloadFile } = require("../../mainModule");

const toArchive = function (req, res, format) {
    if (req.file) {
        const OutputFilePath = Date.now() + "output.png";
        var ext = path.extname(req.file.originalname);
        switch (format) {
            case "zip":
                break;
            case "7z":
                break;
            case "tar":
                break;
        }
    }
    else {
        res.send("Please input the file!");
    }
};

module.exports = { toArchive };