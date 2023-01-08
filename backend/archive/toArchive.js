const fs = require("fs");
const tar = require("tar");
var AdmZip = require("adm-zip");

const toArchive = function (req, res, folderPath, format) {
    if (req.files) {
        switch (format) {
            case "zip":
                var zip = new AdmZip();
                req.files.forEach(file => {
                    zip.addLocalFile(file.path);
                })
                zip.writeZip(`${folderPath}.zip`);
                res.download(`${folderPath}.zip`, (err) => {
                    if (err) {
                        res.send("Some error occurred during the downloading process.");
                    }
                    req.files.forEach(file => {
                        fs.unlinkSync(file.path);
                    })
                    fs.rmSync(`${folderPath}.zip`, { recursive: true, force: true });
                })
                break;
            case "tar":
                tar.create({ file: `${folderPath}.tar` }, [`${folderPath}`], () => {
                    res.download(`${folderPath}.tar`, (err) => {
                        if (err) {
                            res.send("Some error occurred during the downloading process.");
                        }
                        fs.rmSync(folderPath, { recursive: true, force: true });
                        fs.rmSync(`${folderPath}.tar`, { recursive: true, force: true });
                    })
                })
                break;
        }
    }
    else {
        res.send("Please input the file!");
    }
};

module.exports = { toArchive };