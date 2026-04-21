"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const edit_ejs_1 = require("./edit.ejs");
const view_ejs_1 = require("./view.ejs");
exports.default = {
    treeView: {
        form: view_ejs_1.default,
    },
    treeEdit: {
        form: edit_ejs_1.default
    }
};
