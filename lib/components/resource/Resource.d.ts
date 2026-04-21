declare const SelectComponent: any;
import editForm from './Resource.form';
export default class ResourceComponent extends SelectComponent {
    static editForm: typeof editForm;
    static schema(...extend: any[]): any;
    static get builderInfo(): {
        title: string;
        icon: string;
        weight: number;
        documentation: string;
        schema: any;
    };
    constructor(...args: any[]);
    init(): void;
    get defaultSchema(): any;
}
export {};
