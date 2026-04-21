"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const js_1 = require("@formio/js");
const ImageRadioCard_edit_data_1 = require("./editForm/ImageRadioCard.edit.data");
const ImageRadioCard_edit_display_1 = require("./editForm/ImageRadioCard.edit.display");
const radioEditForm = js_1.Components.components.radio.editForm;
function findTab(editForm, tabKey) {
    for (const tab of editForm.components) {
        if (tab.type === 'tabs' || tab.key === 'tabs') {
            const tabComponents = tab.components || [];
            for (const child of tabComponents) {
                if (child.key === tabKey)
                    return child;
            }
        }
    }
    return null;
}
function addImageUrlColumnToValuesGrid(dataTab) {
    for (const comp of dataTab.components) {
        if (comp.key === 'values' && comp.type === 'datagrid') {
            comp.components = (comp.components || []).filter((c) => c.key !== 'shortcut');
            comp.components.push({
                label: 'Image URL',
                key: 'imageUrl',
                input: true,
                type: 'textfield',
                placeholder: 'https://example.com/image.jpg',
            });
        }
    }
}
function default_1(...extend) {
    const form = radioEditForm([
        { key: 'data', components: ImageRadioCard_edit_data_1.default },
        { key: 'display', components: ImageRadioCard_edit_display_1.default },
    ], ...extend);
    // Post-process: modify the inherited values datagrid to add imageUrl column
    const dataTab = findTab(form, 'data');
    if (dataTab) {
        addImageUrlColumnToValuesGrid(dataTab);
    }
    return form;
}
