declare const _default: {
    _id: string;
    type: string;
    tags: any[];
    owner: string;
    components: ({
        title: string;
        label: string;
        type: string;
        key: string;
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
        input: boolean;
        tableView: boolean;
    } | {
        title: string;
        label: string;
        type: string;
        key: string;
        components: {
            label: string;
            tableView: boolean;
            validate: {
                required: boolean;
            };
            rowDrafts: boolean;
            key: string;
            type: string;
            input: boolean;
            components: {
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
            }[];
        }[];
        input: boolean;
        tableView: boolean;
    } | {
        title: string;
        label: string;
        type: string;
        key: string;
        components: {
            label: string;
            autoExpand: boolean;
            tableView: boolean;
            validate: {
                required: boolean;
            };
            key: string;
            type: string;
            input: boolean;
        }[];
        input: boolean;
        tableView: boolean;
    })[];
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
