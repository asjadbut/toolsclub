const fs = require("fs");
const WordExtractor = require("word-extractor");
const { DownloadFile } = require("../../mainModule");
const doc_docxToTxt = function (req, res) {
    if (req.file) {
        const OutputFilePath = Date.now() + "output.txt";
        const extractor = new WordExtractor();
        const extracted = extractor.extract(req.file.path);
        extracted.then(function (doc) {
            fs.writeFileSync(OutputFilePath, doc.getBody());
            DownloadFile(res, req.file.path, OutputFilePath, OutputFilePath);
        });
    }
    else {
        res.send("Please input the file!");
    }
}

module.exports = { doc_docxToTxt }