declare const _default: {
    type: string;
    owner: any;
    components: ({
        label: string;
        tableView: boolean;
        display: string;
        components: {
            label: string;
            tableView: boolean;
            templates: {
                header: string;
                row: string;
            };
            rowDrafts: boolean;
            key: string;
            type: string;
            input: boolean;
            components: {
                label: string;
                tableView: boolean;
                templates: {
                    header: string;
                    row: string;
                };
                rowDrafts: boolean;
                key: string;
                type: string;
                input: boolean;
                components: {
                    label: string;
                    tableView: boolean;
                    key: string;
                    type: string;
                    input: boolean;
                }[];
            }[];
        }[];
        key: string;
        type: string;
        input: boolean;
        disableOnInvalid?: undefined;
    } | {
        type: string;
        label: string;
        key: string;
        disableOnInvalid: boolean;
        input: boolean;
        tableView: boolean;
        display?: undefined;
        components?: undefined;
    })[];
};
export default _default;
