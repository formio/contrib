import editForm from './CheckMatrix.form';
declare const CheckMatrix_base: any;
/**
 * Here we will derive from the base component which all Form.io form components derive from.
 *
 * @param component
 * @param options
 * @param data
 * @constructor
 */
export default class CheckMatrix extends CheckMatrix_base {
    checks: Array<Array<any>>;
    constructor(component: any, options: any, data: any);
    static schema(): any;
    static editForm: typeof editForm;
    static builderInfo: {
        title: string;
        group: string;
        icon: string;
        weight: number;
        documentation: string;
        schema: any;
    };
    get tableClass(): string;
    renderCell(row: any, col: any): any;
    render(children: any): any;
    /**
     * After the html string has been mounted into the dom, the dom element is returned here. Use refs to find specific
     * elements to attach functionality to.
     *
     * @param element
     * @returns {Promise}
     */
    attach(element: any): any;
    /**
     * Get the value of the component from the dom elements.
     *
     * @returns {Array}
     */
    getValue(): any[];
    /**
     * Set the value of the component into the dom elements.
     *
     * @param value
     * @returns {boolean}
     */
    setValue(value: any): boolean;
}
export {};
