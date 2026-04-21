"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const js_1 = require("@formio/js");
const componentEditForm = js_1.Components.components.component.editForm;
const Tree_edit_data_1 = require("./editForm/Tree.edit.data");
const Tree_edit_display_1 = require("./editForm/Tree.edit.display");
function default_1(...extend) {
    return componentEditForm([
        {
            key: 'display',
            components: Tree_edit_display_1.default,
        },
        {
            key: 'data',
            components: Tree_edit_data_1.default,
        },
    ], ...extend);
}
