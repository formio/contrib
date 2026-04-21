declare const _default: {
    options: {
        builder: {
            builder: {
                custom: {
                    title: string;
                    weight: number;
                    components: {};
                };
            };
        };
    };
    components: {
        cardComponent: typeof import("./components/CardComponent/CardComponent").default;
        checkmatrix: typeof import("./components/CheckMatrix/CheckMatrix").default;
        resource: typeof import("./components/resource/Resource").default;
        tree: typeof import("./components/tree/Tree").default;
    };
    templates: {
        bootstrap: {
            treeView: {
                form: string;
            };
            treeEdit: {
                form: string;
            };
            cardComponent: {
                form: string;
            };
            checkmatrix: {
                form: string;
            };
            tree: {
                form: string;
            };
        };
    };
};
export default _default;
