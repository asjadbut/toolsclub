const { convertWordFiles } = require("convert-multiple-files-ul");
const path = require("path");
const { DownloadFile } = require("../../mainModule");

const docx_odtToDoc = function (req, res) {
  if (req.file) {
    const OutputFilePath = Date.now() + "output.doc";
    convertWordFiles(path.resolve("public/uploaded_files", req.file.filename), 'doc', OutputFilePath);
    DownloadFile(res, req.file.path, OutputFilePath + "/" + req.file.filename.split(".")[0] + ".doc", OutputFilePath);
  }
  else {
    res.send("Please input the file!");
  }
}

module.exports = { docx_odtToDoc }