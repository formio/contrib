declare const _default: ({
    type: string;
    input: boolean;
    label: string;
    key: string;
    tooltip: string;
    placeholder: string;
    weight: number;
    conditional: {
        json: {
            '===': (string | {
                var: string;
            })[];
            '!!'?: undefined;
        };
    };
    dataSrc?: undefined;
    valueProperty?: undefined;
    data?: undefined;
} | {
    type: string;
    input: boolean;
    key: string;
    label: string;
    weight: number;
    tooltip: string;
    dataSrc: string;
    valueProperty: string;
    data: {
        custom(context: any): {
            label: string;
            value: string;
        }[];
    };
    conditional: {
        json: {
            '===': (string | {
                var: string;
            })[];
            '!!'?: undefined;
        };
    };
    placeholder?: undefined;
} | {
    type: string;
    input: boolean;
    key: string;
    label: string;
    weight: number;
    tooltip: string;
    placeholder: string;
    conditional: {
        json: {
            '!!': {
                var: string;
            };
            '==='?: undefined;
        };
    };
    dataSrc?: undefined;
    valueProperty?: undefined;
    data?: undefined;
})[];
export default _default;
