const fs = require("fs");
const { convertWordFiles } = require("convert-multiple-files-ul");
const path = require("path")

const docx_odtToDoc = function (req, res) {
  if (req.file) {
    const OutputFilePath = Date.now() + "output.doc";
    convertWordFiles(path.resolve("public/uploaded_files", req.file.filename), 'doc', OutputFilePath);
    res.download(OutputFilePath + "/" + req.file.filename.split(".")[0] + ".doc", (err) => {
      if (err) {
        res.send("Some error occurred during the downloading process.");
      }
      fs.unlinkSync(req.file.path);
      fs.unlink(OutputFilePath + "/" + req.file.filename.split(".")[0] + ".doc", () => {
        fs.rmdir(OutputFilePath, () => {
          console.log("Folder Deleted!");
        });
      });
    })
  }
  else {
    res.send("Please input the file!");
  }
}

module.exports = { docx_odtToDoc }