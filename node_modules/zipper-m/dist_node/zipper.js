/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/zipper.kep'
 * DO NOT EDIT
*/
"use strict";
var Identity = require("akh")["identity"],
    ZipperT = require("./trans/zipper"),
    Zipper;
(Zipper = ZipperT(Identity));
var x = ZipperT.runZipperT,
    y = Identity.runIdentity;
(Zipper.runZipper = (function() {
    return y(x.apply(null, arguments));
}));
(module.exports = Zipper);