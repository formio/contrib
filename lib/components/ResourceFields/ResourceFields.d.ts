import { Components } from 'formiojs';
declare const NestedComponent: typeof Components.components.nested;
export default class ResourceFieldsComponent extends NestedComponent {
    [x: string]: any;
    constructor(component: any, options: any, data: any);
    addDynamicFields(): void;
    setValue(value: any, flags: any): boolean;
}
export {};
