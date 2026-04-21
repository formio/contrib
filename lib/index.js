"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("./components");
const templates_1 = require("./templates");
exports.default = {
    // Declare a "Custom Components" group in the form builder sidebar.
    // Components that set `group: 'custom'` in their builderInfo (e.g.
    // CardComponent) will appear under this category.
    options: {
        builder: {
            builder: {
                custom: {
                    title: 'Custom Components',
                    weight: 10,
                    components: {},
                },
            },
        },
    },
    components: components_1.default,
    templates: templates_1.default,
};
