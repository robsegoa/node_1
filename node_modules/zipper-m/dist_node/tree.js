/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/tree.kep'
 * DO NOT EDIT
*/
"use strict";
var Identity = require("akh")["identity"],
    TreeZipperT = require("./trans/tree"),
    TreeZipper;
(TreeZipper = TreeZipperT(Identity));
var x = TreeZipperT.runTreeZipperT,
    y = Identity.runIdentity;
(TreeZipper.runTreeZipper = (function() {
    return y(x.apply(null, arguments));
}));
(module.exports = TreeZipper);