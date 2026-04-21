"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const js_1 = require("@formio/js");
const SelectComponent = js_1.Components.components.select;
const Resource_form_1 = require("./Resource.form");
class ResourceComponent extends SelectComponent {
    static schema(...extend) {
        return SelectComponent.schema({
            type: 'resource',
            label: 'Resource',
            key: 'resource',
            dataSrc: 'resource',
            resource: '',
            project: '',
            template: '<span>{{ item.data }}</span>',
        }, ...extend);
    }
    static get builderInfo() {
        return {
            title: 'Resource',
            icon: 'files-o',
            weight: 90,
            documentation: '/userguide/form-building/form-components#resource',
            schema: ResourceComponent.schema(),
        };
    }
    constructor(...args) {
        super(...args);
    }
    init() {
        super.init();
        this.component.dataSrc = 'resource';
        this.component.data = {
            resource: this.component.resource,
        };
    }
    get defaultSchema() {
        return ResourceComponent.schema();
    }
}
ResourceComponent.editForm = Resource_form_1.default;
exports.default = ResourceComponent;
