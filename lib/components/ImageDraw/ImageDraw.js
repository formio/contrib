"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formiojs_1 = require("formiojs");
const FileComponent = formiojs_1.Components.components.file;
class ImageDrawComponent extends FileComponent {
    static schema() {
        return FileComponent.schema({
            type: 'imagedraw',
            image: true,
            storage: 'base64'
        });
    }
    static get builderInfo() {
        return {
            title: 'Image Draw',
            group: 'basic',
            icon: 'fa fa-image',
            weight: 70,
            schema: ImageDrawComponent.schema()
        };
    }
    render() {
        return super.render(this.renderTemplate('imagedraw', {
            fileSize: this.fileSize,
            files: this.dataValue || [],
            statuses: this.statuses,
            disabled: this.disabled,
            support: this.support,
            fileDropHidden: this.fileDropHidden
        }));
    }
    attach(element) {
        const attachRet = super.attach(element);
        this.loadRefs(element.parentNode, {
            drawpad: 'multiple'
        });
        if (this.refs.drawpad && this.refs.drawpad.length) {
            const ctx = this.refs.drawpad[0].getContext('2d');
            ctx.beginPath();
            ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
            ctx.moveTo(110, 75);
            ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
            ctx.moveTo(65, 65);
            ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
            ctx.moveTo(95, 65);
            ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
            ctx.stroke();
        }
        return attachRet;
    }
}
ImageDrawComponent.editForm = FileComponent.editForm;
exports.default = ImageDrawComponent;
