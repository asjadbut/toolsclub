const express = require("express");
const multer = require("multer");
const app = express();
const port = 3000;
const path = require("path");
const { docxToPdf } = require("./backend/docxToPdf");
const { docxToPdfFilter } = require("./filters/docxToPdfFilter");
const {docx_odtToDoc} = require("./backend/docx_odtToDoc")
const {docx_odtToDocFilter} = require("./filters/docx_odtToDocFilter")
const {doc_odtToDocx} = require("./backend/doc_odtToDocx")
const {doc_odtToDocxFilter} = require("./filters/doc_odtToDocxFilter")
const {doc_docxToOdt} = require("./backend/doc_docxToOdt")
const {doc_docxToOdtFilter} = require("./filters/doc_docxToOdtFilter")
const {doc_docxToTxt} = require("./backend/doc_docxToTxt")
const {doc_docxToTxtFilter} = require("./filters/doc_docxToTxtFilter")
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



