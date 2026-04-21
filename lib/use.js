"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const js_1 = require("@formio/js");
const index_1 = require("./index");
const F = js_1.Formio;
F.use(index_1.default);
// Form.io's portal runs its own init lifecycle AFTER user scripts load
// via the Custom Javascript URL. That init resets `Formio.options` to
// `{}`, which wipes the `options.builder.builder.custom` group we
// declared in index.ts. Component classes survive (they mutate the
// Components registry), but the builder group declaration doesn't.
//
// Patch `WebformBuilder.prototype.defaultGroups` to add the "Custom
// Components" group. This is read at construction time by every
// builder instance, so prototype-level patches survive the portal's
// options reset. Components with `builderInfo.group === 'custom'`
// (e.g. CardComponent) then get added to the group automatically via
// WebformBuilder's addBuilderComponentInfo call.
try {
    const WebformBuilder = F.Builders && F.Builders.builders && F.Builders.builders.webform;
    if (WebformBuilder && WebformBuilder.prototype) {
        const descriptor = Object.getOwnPropertyDescriptor(WebformBuilder.prototype, 'defaultGroups');
        if (descriptor && descriptor.get) {
            const origGet = descriptor.get;
            Object.defineProperty(WebformBuilder.prototype, 'defaultGroups', {
                configurable: true,
                get() {
                    const groups = origGet.call(this);
                    if (!groups.custom) {
                        groups.custom = { title: 'Custom Components', weight: 5 };
                    }
                    return groups;
                },
            });
        }
    }
}
catch (e) {
    // Swallow — if the patch fails, the "Custom Components" group
    // simply won't appear in the builder sidebar, but the component
    // and templates still register normally.
}
exports.default = index_1.default;
