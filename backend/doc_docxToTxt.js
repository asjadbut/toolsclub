const fs = require("fs");
const WordExtractor = require("word-extractor");
const doc_docxToTxt = function (req, res) {
    if (req.file) {
        const OutputFilePath = Date.now() + "output.txt";
        const extractor = new WordExtractor();
        const extracted = extractor.extract(req.file.path);
        extracted.then(function (doc) {
            fs.writeFileSync(OutputFilePath, doc.getBody());
            res.download(OutputFilePath, (err) => {
                if (err) {
                    res.send("Some error occurred during the downloading process.");
                    console.log(err);
                }
                fs.unlinkSync(req.file.path);
                fs.unlinkSync(OutputFilePath);
            })
        });

    }
    else {
        res.send("Please input the file!");
    }
}

module.exports = { doc_docxToTxt }