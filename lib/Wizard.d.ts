declare const OriginalWizard: typeof import("@formio/js/lib/cjs/Wizard").default;
export default class Wizard extends OriginalWizard {
    [x: string]: any;
    emitWizardPageSelected(index: any): void;
    emitNextPage(): void;
    emitPrevPage(): void;
    focusOnComponent(key: any): void | Promise<void>;
    hasButton(name: any, nextPage?: number): any;
    setEditMode(submission: any): void;
    setChangingMode(): void;
    hasDynamicWizard(): any;
    updatePages(): void;
}
export {};
