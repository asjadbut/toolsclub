const express = require("express");
const multer = require("multer");
var fs = require('fs-extra')
const app = express();
const port = 3000;
const path = require("path");
const { docxToPdf } = require("./backend/document/docxToPdf");
const { docxToPdfFilter } = require("./filters/document-filters/docxToPdfFilter");
const { docx_odtToDoc } = require("./backend/document/docx_odtToDoc");
const { docx_odtToDocFilter } = require("./filters/document-filters/docx_odtToDocFilter");
const { doc_odtToDocx } = require("./backend/document/doc_odtToDocx");
const { doc_odtToDocxFilter } = require("./filters/document-filters/doc_odtToDocxFilter");
const { doc_docxToOdt } = require("./backend/document/doc_docxToOdt");
const { doc_docxToOdtFilter } = require("./filters/document-filters/doc_docxToOdtFilter");
const { doc_docxToTxt } = require("./backend/document/doc_docxToTxt");
const { doc_docxToTxtFilter } = require("./filters/document-filters/doc_docxToTxtFilter");
const { png_svgToJpg } = require("./backend/image/png_svgToJpg");
const { png_svgToJpgFilter } = require("./filters/image-filters/png_svgToJpgFilter");
const { jpg_svgToPng } = require("./backend/image/jpg_svgToPng");
const { jpg_svgToPngFilter } = require("./filters/image-filters/jpg_svgToPngFilter");
const { toArchive } = require("./backend/archive/toArchive");
const { toArchiveFilter } = require("./filters/archive-filters/toArchiveFilter");

const { multerStorage } = require("./multerConfig");



app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use(express.static(__dirname + "/public"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// ************************** DOC | DOCX | ODT TO PDF **************************

const upload = multer({ storage: multerStorage, fileFilter: docxToPdfFilter });

app.post("/converters/document-converters/docx-to-pdf.html", upload.single("docxFile"), (req, res) => {
  docxToPdf(req, res);
});


// ************************** DOCX | ODT TO DOC **************************

const upload2 = multer({ storage: multerStorage, fileFilter: docx_odtToDocFilter });

app.post("/converters/document-converters/docx-odt-to-doc.html", upload2.single("docx_odtFile"), (req, res) => {
  docx_odtToDoc(req, res);
});


// ************************** DOC | ODT TO DOCX **************************

const upload3 = multer({ storage: multerStorage, fileFilter: doc_odtToDocxFilter });

app.post("/converters/document-converters/doc-odt-to-docx.html", upload3.single("doc_odtFile"), (req, res) => {
  doc_odtToDocx(req, res);
});


// ************************** DOC | DOCX TO ODT **************************

const upload4 = multer({ storage: multerStorage, fileFilter: doc_docxToOdtFilter });

app.post("/converters/document-converters/doc-docx-to-odt.html", upload4.single("doc_docxFile"), (req, res) => {
  doc_docxToOdt(req, res);
});


// ************************** DOCX | PDF TO ODT **************************

const upload5 = multer({ storage: multerStorage, fileFilter: doc_docxToTxtFilter });

app.post("/converters/document-converters/doc-docx-to-txt.html", upload5.single("doc_docxFile"), (req, res) => {
  doc_docxToTxt(req, res);
});




// ************************** PNG | SVG TO JPG ***************************

const upload6 = multer({ storage: multerStorage, fileFilter: png_svgToJpgFilter });

app.post("/converters/image-converters/png-svg-to-jpg.html", upload6.single("png_svgFile"), (req, res) => {
  png_svgToJpg(req, res);
});




// ************************** JPG | SVG TO PNG ***************************

const upload7 = multer({ storage: multerStorage, fileFilter: jpg_svgToPngFilter });

app.post("/converters/image-converters/jpg-svg-to-png.html", upload7.single("jpg_svgFile"), (req, res) => {
  jpg_svgToPng(req, res);
});


// ************************** FILE | FILES TO ZIP ***************************

const upload8 = multer({ storage: multerStorage, fileFilter: toArchiveFilter });

app.post("/converters/archive-converters/to-zip.html", upload8.array("zipFiles"), (req, res) => {
  var userFolderPath = `${req.body.userId}`;
  toArchive(req, res, userFolderPath, "zip");

});


// ************************** FILE | FILES TO TAR ***************************


app.post("/converters/archive-converters/to-tar.html", upload8.array("tarFiles"), (req, res) => {
  var userFolderPath = `${req.body.userId}`;
  fs.mkdirSync(userFolderPath, { recursive: true });
  req.files.forEach(file => {
    fs.moveSync(file.path, `${userFolderPath}/${file.filename}`, { overwrite: true });
  })
  toArchive(req, res, userFolderPath, "tar");
});
