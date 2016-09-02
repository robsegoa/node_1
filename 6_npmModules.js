AdmZip = require('adm-zip')
// creating archives 
var zip = new AdmZip();

// add file directly 
//zip.addFile("test.txt", new Buffer("inner content of the file"), "entry comment goes here");
// add local file 
zip.addLocalFile("1_start.js");
// get everything as a buffer 
var willSendthis = zip.toBuffer();
// or write everything to disk 
zip.writeZip(/*target file name*/'./arquivos/arquivo.zip');
    