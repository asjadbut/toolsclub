const fs = require("fs");
const DownloadFile = (res, inputFilePath, outputFilePath, folder) => {
  res.download(outputFilePath, (err) => {
    if (err) {
      res.send("Some error occurred during the downloading process.");
    }
    fs.unlinkSync(inputFilePath);
    fs.unlink(outputFilePath, () => {
      if (outputFilePath == folder) {
      }
      else {
        fs.rmdir(folder, () => { })
      }
    });
  })
}
module.exports = { DownloadFile }