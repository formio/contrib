"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const js_1 = require("@formio/js");
const baseEditForm = js_1.Components.components.component.editForm;
const DynamicWizard_edit_data_1 = require("./editForm/DynamicWizard.edit.data");
const DynamicWizard_edit_display_1 = require("./editForm/DynamicWizard.edit.display");
const DynamicWizard_edit_templates_1 = require("./editForm/DynamicWizard.edit.templates");
const DynamicWizard_edit_validation_1 = require("./editForm/DynamicWizard.edit.validation");
function default_1(...extend) {
    return baseEditForm([
        {
            label: 'Templates',
            key: 'templates',
            weight: 5,
            components: DynamicWizard_edit_templates_1.default
        },
        {
            key: 'display',
            components: DynamicWizard_edit_display_1.default,
        },
        {
            key: 'data',
            components: DynamicWizard_edit_data_1.default,
        },
        {
            key: 'validation',
            components: DynamicWizard_edit_validation_1.default
        },
        {
            key: 'addons',
            ignore: true
        },
    ], ...extend);
}
