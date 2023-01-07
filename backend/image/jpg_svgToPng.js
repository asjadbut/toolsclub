const jimp = require("jimp");
const { convertFile } = require('convert-svg-to-png');
const path = require("path");
const { DownloadFile } = require("../../mainModule");

const jpg_svgToPng = function (req, res) {
    if (req.file) {

        const OutputFilePath = Date.now() + "output.png";
        var ext = path.extname(req.file.originalname);

        switch (ext) {
            case ".jpg":
                jimp.read(req.file.path, function (err, image) {
                    if (err) {
                        res.send("Some error occurred during the file reading process.");
                    }
                    image.write(OutputFilePath, (err) => {
                        if (err) {
                            res.send("Some error occurred during the file writing process.");
                        }
                        DownloadFile(res, req.file.path, OutputFilePath);
                    });
                });
                break;
            case ".svg":
                convertFile(req.file.path, { height: 512, width: 512 }).then(() => {
                    DownloadFile(res, req.file.path, req.file.path.split(".")[0] + ".png");
                })
                break;
        }

    }
    else {
        res.send("Please input the file!");
    }
};

module.exports = { jpg_svgToPng };