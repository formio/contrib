import editForm from './SelectCardComponent.form';
declare const SelectCardComponent_base: any;
export default class SelectCardComponent extends SelectCardComponent_base {
    currentPage: number;
    pageSize: number;
    resizeObserver: ResizeObserver | null;
    _rawItems: any[];
    static schema(...extend: any[]): any;
    static get builderInfo(): {
        title: string;
        group: string;
        icon: string;
        weight: number;
        schema: any;
    };
    static editForm: typeof editForm;
    get defaultSchema(): any;
    init(): void;
    serializeValue(itemValue: any): string;
    isSelected(itemValue: any): boolean;
    getInputAttrs(): string;
    render(): any;
    /**
     * Returns the full source items array — every loadedOption (URL mode)
     * or every inline value. Used as the canonical iteration target for
     * render so refs.input.length always equals loadedOptions.length.
     */
    getAllItems(): any[];
    /**
     * Returns absolute indices into getAllItems() that match the configured
     * filter (or every index if no filter is configured). Pagination math
     * and visibility annotations use these indices; the DOM render itself
     * still iterates every item.
     */
    getMatchingIndices(): number[];
    getTotalPages(): number;
    attach(element: HTMLElement): any;
    detach(element?: HTMLElement): void;
    setItems(items: any[]): void;
}
export {};
