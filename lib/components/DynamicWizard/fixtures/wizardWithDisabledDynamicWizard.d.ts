declare const _default: {
    _id: string;
    type: string;
    tags: any[];
    owner: string;
    components: {
        title: string;
        label: string;
        type: string;
        key: string;
        components: ({
            label: string;
            mask: boolean;
            spellcheck: boolean;
            tableView: boolean;
            delimiter: boolean;
            requireDecimal: boolean;
            inputFormat: string;
            key: string;
            type: string;
            input: boolean;
            disabled?: undefined;
            templates?: undefined;
            rowDrafts?: undefined;
            logic?: undefined;
            components?: undefined;
        } | {
            label: string;
            disabled: boolean;
            tableView: boolean;
            templates: {
                header: string;
                row: string;
            };
            rowDrafts: boolean;
            key: string;
            logic: {
                name: string;
                trigger: {
                    type: string;
                    simple: {
                        show: boolean;
                        when: string;
                        eq: string;
                    };
                };
                actions: {
                    name: string;
                    type: string;
                    property: {
                        label: string;
                        value: string;
                        type: string;
                    };
                    state: boolean;
                }[];
            }[];
            type: string;
            input: boolean;
            components: {
                label: string;
                tableView: boolean;
                key: string;
                type: string;
                input: boolean;
            }[];
            mask?: undefined;
            spellcheck?: undefined;
            delimiter?: undefined;
            requireDecimal?: undefined;
            inputFormat?: undefined;
        })[];
        input: boolean;
        tableView: boolean;
    }[];
    revisions: string;
    _vid: number;
    title: string;
    display: string;
    access: {
        roles: string[];
        type: string;
    }[];
    submissionAccess: {
        roles: any[];
        type: string;
    }[];
    controller: string;
    properties: {};
    settings: {};
    name: string;
    path: string;
    project: string;
    created: string;
    modified: string;
    machineName: string;
};
export default _default;
