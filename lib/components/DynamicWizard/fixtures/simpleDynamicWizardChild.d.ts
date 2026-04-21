declare const _default: {
    _id: string;
    type: string;
    tags: any[];
    owner: string;
    components: {
        title: string;
        breadcrumbClickable: boolean;
        buttonSettings: {
            previous: boolean;
            cancel: boolean;
            next: boolean;
        };
        scrollToTop: boolean;
        collapsible: boolean;
        key: string;
        type: string;
        label: string;
        components: {
            label: string;
            tableView: boolean;
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
