declare const _default: ({
    type: string;
    label: string;
    key: string;
    rows: number;
    editor: string;
    as: string;
    input: boolean;
    placeholder: string;
    tooltip: string;
    customConditional(): boolean;
    description?: undefined;
} | {
    type: string;
    label: string;
    key: string;
    rows: number;
    editor: string;
    as: string;
    input: boolean;
    placeholder: string;
    description: string;
    tooltip: string;
    customConditional(): boolean;
} | {
    type: string;
    input: boolean;
    key: string;
    label: string;
    placeholder: string;
    tooltip: string;
    rows?: undefined;
    editor?: undefined;
    as?: undefined;
    customConditional?: undefined;
    description?: undefined;
})[];
export default _default;
