"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const js_1 = require("@formio/js");
const nestedComponentForm = js_1.Components.components.nested.editForm;
const CheckMatrix_edit_display_1 = require("./editForm/CheckMatrix.edit.display");
function default_1(...extend) {
    return nestedComponentForm([
        {
            key: 'display',
            components: CheckMatrix_edit_display_1.default
        }
    ], ...extend);
}
