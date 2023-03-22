declare const FileComponent: any;
export default class ImageDrawComponent extends FileComponent {
    static schema(): any;
    static editForm: any;
    static get builderInfo(): {
        title: string;
        group: string;
        icon: string;
        weight: number;
        schema: any;
    };
    render(): any;
    attach(element: any): any;
}
export {};
