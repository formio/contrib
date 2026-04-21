declare const _default: {
    type: string;
    owner: any;
    components: ({
        label: string;
        tableView: boolean;
        key: string;
        type: string;
        input: boolean;
        tree: boolean;
        components: {
            title: string;
            collapsible: boolean;
            key: string;
            type: string;
            label: string;
            input: boolean;
            tableView: boolean;
            components: {
                label: string;
                tableView: boolean;
                validate: {
                    required: boolean;
                };
                key: string;
                type: string;
                input: boolean;
            }[];
        }[];
        disableOnInvalid?: undefined;
    } | {
        type: string;
        label: string;
        key: string;
        disableOnInvalid: boolean;
        input: boolean;
        tableView: boolean;
        tree?: undefined;
        components?: undefined;
    })[];
};
export default _default;
