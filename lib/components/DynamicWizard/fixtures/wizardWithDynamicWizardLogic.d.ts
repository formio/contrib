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
                key: string;
                type: string;
                input: boolean;
                autoExpand?: undefined;
                logic?: undefined;
            } | {
                label: string;
                autoExpand: boolean;
                tableView: boolean;
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
                        value: string;
                    }[];
                }[];
                type: string;
                input: boolean;
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
