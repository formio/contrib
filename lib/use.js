"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formiojs_1 = require("formiojs");
const index_1 = require("./index");
formiojs_1.Formio.use(index_1.default);
exports.default = index_1.default;
