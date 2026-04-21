export default class Node {
    createComponents: any;
    parent: any;
    previousData: {};
    persistentData: any;
    new: boolean;
    checkNode: any;
    removeComponents: any;
    revertAvailable: boolean;
    editing: boolean;
    collapsed: boolean;
    children: any[];
    parentPath: string;
    components: any[];
    data: any;
    constructor(parent: any, { data, children, }?: {
        data?: {};
        children?: any[];
    }, { checkNode, createComponents, isNew, removeComponents, parentPath }?: {
        checkNode?: () => any;
        createComponents?: () => any;
        isNew?: boolean;
        removeComponents?: () => any;
        parentPath?: string;
    });
    get value(): {
        data: any;
        children: any[];
    };
    get isRoot(): boolean;
    get changing(): boolean;
    get hasChangingChildren(): boolean;
    get hasData(): boolean;
    get hasChildren(): boolean;
    getChildrenPath(index: any): string;
    eachChild(iteratee: any): this;
    getComponents(): any;
    validateNode(): boolean;
    addChild(): Node;
    removeChild(childToRemove: any): this;
    edit(): this;
    save(): boolean;
    cancel(): this;
    remove(): this;
    revert(): this;
    commitData(): this;
    resetData(): this;
    updateComponentsContext(): this;
    instantiateComponents(): void;
    clearComponents(): void;
    /**
     * Return a path of component's value.
     *
     * @param {Object} component - The component instance.
     * @return {string} - The component's value path.
     */
    calculateComponentPath(component: any): string;
}
