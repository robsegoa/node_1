/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/zipper.kep'
 * DO NOT EDIT
*/
"use strict";
var StateT = require("akh")["trans"]["state"],
    zipper = require("neith")["zipper"],
    ZipperT, ZipperMonad = (function(Instance, get, move) {
        (Instance.prototype.inspect = get.map.bind(get));
        (Instance.inspect = Instance.prototype.inspect);
        (Instance.prototype.extract = get.map(zipper.extract));
        (Instance.extract = Instance.prototype.extract);
        (Instance.inspectWith = Instance.extract.chain.bind(Instance.extract));
        (Instance.prototype.move = move);
        (Instance.move = Instance.prototype.move);
        (Instance.prototype.up = move(zipper.up));
        (Instance.up = Instance.prototype.up);
        (Instance.prototype.down = move(zipper.down));
        (Instance.down = Instance.prototype.down);
        (Instance.prototype.left = move(zipper.left));
        (Instance.left = Instance.prototype.left);
        (Instance.prototype.right = move(zipper.right));
        (Instance.right = Instance.prototype.right);
        (Instance.prototype.root = move(zipper.root));
        (Instance.root = Instance.prototype.root);
        (Instance.prototype.leftmost = move(zipper.leftmost));
        (Instance.leftmost = Instance.prototype.leftmost);
        (Instance.prototype.rightmost = move(zipper.rightmost));
        (Instance.rightmost = Instance.prototype.rightmost);
        (Instance.prototype.leftLeaf = move(zipper.leftLeaf));
        (Instance.leftLeaf = Instance.prototype.leftLeaf);
        (Instance.prototype.rightLeaf = move(zipper.rightLeaf));
        (Instance.rightLeaf = Instance.prototype.rightLeaf);
        (Instance.prototype.replace = (function(n) {
            return move(zipper.replace.bind(null, n));
        }));
        (Instance.replace = Instance.prototype.replace);
        (Instance.prototype.modify = (function(f) {
            return move(zipper.modify.bind(null, f));
        }));
        (Instance.modify = Instance.prototype.modify);
        (Instance.prototype.remove = move(zipper.remove));
        (Instance.remove = Instance.prototype.remove);
        (Instance.prototype.insertLeft = (function(n) {
            return move(zipper.insertLeft.bind(null, n));
        }));
        (Instance.insertLeft = Instance.prototype.insertLeft);
        (Instance.prototype.insertRight = (function(n) {
            return move(zipper.insertRight.bind(null, n));
        }));
        (Instance.insertRight = Instance.prototype.insertRight);
        (Instance.prototype.insertChild = (function(n) {
            return move(zipper.insertChild.bind(null, n));
        }));
        (Instance.insertChild = Instance.prototype.insertChild);
        (Instance.prototype.appendChild = (function(n) {
            return move(zipper.appendChild.bind(null, n));
        }));
        (Instance.appendChild = Instance.prototype.appendChild);
        return Instance;
    });
(ZipperT = (function(m) {
    var Instance = StateT(m);
    ZipperMonad(Instance, Instance.get, Instance.modify);
    return Instance;
}));
(ZipperT.runZipperT = StateT.evalStateT);
(module.exports = ZipperT);