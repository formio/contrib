"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const js_1 = require("@formio/js");
const index_1 = require("./index");
js_1.Formio.use(index_1.default);
exports.default = index_1.default;
