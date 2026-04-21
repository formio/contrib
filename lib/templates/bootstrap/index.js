"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cardComponent_1 = require("./cardComponent");
const checkmatrix_1 = require("./checkmatrix");
const tree_1 = require("./tree");
const partials_1 = require("./tree/partials");
exports.default = {
    cardComponent: cardComponent_1.default,
    checkmatrix: checkmatrix_1.default,
    tree: tree_1.default,
    ...partials_1.default,
};
