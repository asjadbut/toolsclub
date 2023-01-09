const { convertWordFiles } = require("convert-multiple-files-ul");
const path = require("path");
const { DownloadFile } = require("../../mainModule");

const docxToPdf = function (req, res) {
  if (req.file) {
    const OutputFilePath = Date.now() + "output.pdf";
    convertWordFiles(path.resolve("public/uploaded_files", req.file.filename), 'pdf', OutputFilePath);
    DownloadFile(res, req.file.path, OutputFilePath + "/" + req.file.filename.split(".")[0] + ".pdf", OutputFilePath);
  }
  else {
    res.send("Please input the file!");
  }
}

module.exports = { docxToPdf }