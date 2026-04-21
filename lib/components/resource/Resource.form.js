"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const js_1 = require("@formio/js");
const Resource_edit_display_1 = require("./editForm/Resource.edit.display");
function default_1(...extend) {
    return js_1.Components.baseEditForm([
        {
            key: 'display',
            components: Resource_edit_display_1.default
        },
    ], ...extend);
}
