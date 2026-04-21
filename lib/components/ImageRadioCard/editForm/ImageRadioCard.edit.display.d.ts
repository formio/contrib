declare const _default: ({
    key: string;
    ignore: boolean;
    type?: undefined;
    input?: undefined;
    label?: undefined;
    tooltip?: undefined;
    weight?: undefined;
    defaultValue?: undefined;
    dataSrc?: undefined;
    data?: undefined;
} | {
    type: string;
    input: boolean;
    label: string;
    key: string;
    tooltip: string;
    weight: number;
    defaultValue: number;
    dataSrc: string;
    data: {
        values: {
            label: string;
            value: number;
        }[];
    };
    ignore?: undefined;
} | {
    type: string;
    input: boolean;
    label: string;
    key: string;
    tooltip: string;
    weight: number;
    defaultValue: string;
    dataSrc: string;
    data: {
        values: {
            label: string;
            value: string;
        }[];
    };
    ignore?: undefined;
})[];
export default _default;
