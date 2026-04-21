import editForm from './ImageRadioCard.form';
declare const ImageRadioCard_base: any;
export default class ImageRadioCard extends ImageRadioCard_base {
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
    getVisibleItems(): any[];
    getPageItems(items: any[]): any[];
    getTotalPages(items: any[]): number;
    attach(element: HTMLElement): any;
    detach(element?: HTMLElement): void;
    setItems(items: any[]): void;
}
export {};
