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
            components: ({
                label: string;
                tableView: boolean;
                validate: {
                    required: boolean;
                };
                key: string;
                type: string;
                input: boolean;
            } | {
                label: string;
                tableView: boolean;
                key: string;
                type: string;
                input: boolean;
                validate?: undefined;
            })[];
        }[];
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
    submissionAccess: any[];
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
