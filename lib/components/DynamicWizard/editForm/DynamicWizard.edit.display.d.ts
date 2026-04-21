declare const _default: ({
    key: string;
    components: ({
        weight: number;
        type: string;
        input: boolean;
        key: string;
        label: string;
        placeholder: string;
        defaultValue: number;
        tooltip: string;
        customConditional(context: any): boolean;
        tableView?: undefined;
    } | {
        weight: number;
        type: string;
        label: string;
        tooltip: string;
        key: string;
        input: boolean;
        customConditional(context: any): boolean;
        placeholder?: undefined;
        defaultValue?: undefined;
        tableView?: undefined;
    } | {
        label: string;
        tooltip: string;
        tableView: boolean;
        key: string;
        type: string;
        input: boolean;
        weight: number;
        defaultValue: boolean;
        customConditional(context: any): boolean;
        placeholder?: undefined;
    } | {
        label: string;
        weight: number;
        tooltip: string;
        tableView: boolean;
        key: string;
        type: string;
        input: boolean;
        customConditional(context: any): boolean;
        placeholder?: undefined;
        defaultValue?: undefined;
    })[];
} | {
    key: string;
    ignore: boolean;
})[];
export default _default;
