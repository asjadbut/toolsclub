const fs = require("fs");
const DownloadFile = (res,inputFilePath,outputFilePath)=> {
    res.download(outputFilePath, (err) => {
        if (err) {
          res.send("Some error occurred during the downloading process.");
        }
        fs.unlinkSync(inputFilePath);
        fs.unlink(outputFilePath,()=>{});
      })
}
module.exports = {DownloadFile}