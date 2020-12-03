import { Formio } from 'formiojs';
const Component = (Formio as any).Components.components.component;
const attach = Component.prototype.attach;
Component.prototype.attach = function(...args) {
  const retVal = attach.call(this, ...args);
  this.loadRefs(this.element, {
    simpleEdit: 'single'
  });
  if (this.refs.simpleEdit) {
    this.refs.simpleEdit.addEventListener('click', () => {
      this.root.options.editForm.renderMode = 'simple';
      this.root.editComponent(this.schema, this.getParentElement(this.element), false, false, this.component);
      this.root.options.editForm.renderMode = 'form';
    });
  }
  return retVal;
};
