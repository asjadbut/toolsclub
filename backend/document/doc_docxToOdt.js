const { convertWordFiles } = require("convert-multiple-files-ul");
const path = require("path");
const { DownloadFile } = require("../../mainModule");

const doc_docxToOdt = function (req, res) {
  if (req.file) {
    const OutputFilePath = Date.now() + "output.odt";
    convertWordFiles(path.resolve("public/uploaded_files", req.file.filename), 'odt', OutputFilePath);
    DownloadFile(res, req.file.path, OutputFilePath + "/" + req.file.filename.split(".")[0] + ".odt", OutputFilePath)
  }
  else {
    res.send("Please input the file!");
  }
}

module.exports = { doc_docxToOdt }