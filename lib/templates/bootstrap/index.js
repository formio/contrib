"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkmatrix_1 = require("./checkmatrix");
const selectCardComponent_1 = require("./selectCardComponent");
const tree_1 = require("./tree");
const partials_1 = require("./tree/partials");
exports.default = {
    checkmatrix: checkmatrix_1.default,
    selectCardComponent: selectCardComponent_1.default,
    tree: tree_1.default,
    ...partials_1.default,
};
