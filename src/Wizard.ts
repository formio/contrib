import { Displays, Utils } from '@formio/js';
const { _ } = Utils;
const { get } = _;
const OriginalWizard = Displays.displays.wizard;

export default class Wizard extends OriginalWizard {
  [x: string]: any;

  emitWizardPageSelected(index) {
    this.setChangingMode();
    this.emit('wizardPageSelected', this.pages[index], index);
  }

  emitNextPage() {
    this.setChangingMode();
    this.emit('nextPage', { page: this.page, submission: this.submission });
  }

  emitPrevPage() {
    this.setChangingMode();
    this.emit('prevPage', { page: this.page, submission: this.submission });
  }

  focusOnComponent(key) {
    const superFocusOnComponent = super.focusOnComponent(key);
    const dynamicWizardComponent = this.hasDynamicWizard();

    if (dynamicWizardComponent) {
      const component = this.getComponent(key);
      dynamicWizardComponent.switchToStep(component);
    }
    else if (this.element && this.element.classList.contains('dynamicWizard-changingMode')) {
      this.element.classList.remove('dynamicWizard-changingMode');
    }
    return superFocusOnComponent;
  }

  hasButton(name, nextPage = this.getNextPage()) {
    // get page options with global options as default values
    const {
      previous = this.options.buttonSettings.showPrevious,
      cancel = this.options.buttonSettings.showCancel,
      submit = this.options.buttonSettings.showSubmit,
      next = this.options.buttonSettings.showNext
    } = get(this.currentPage, 'component.buttonSettings', {});
    const dynamicWizardComponent = this.hasDynamicWizard();
    const isDynamicWizardNotActive = !dynamicWizardComponent?.isChangingMode || !dynamicWizardComponent.hasComponents;
    const showNavButtons = isDynamicWizardNotActive || this.options.readOnly;

    switch (name) {
      case 'previous':
        return previous && (this.getPreviousPage() > -1) && showNavButtons;
      case 'next':
        return next && (nextPage !== null) && (nextPage !== -1) && showNavButtons;
      case 'cancel':
        return cancel && !this.options.readOnly && showNavButtons;
      case 'submit':
        return submit && !this.options.readOnly && ((nextPage === null) || (this.page === (this.pages.length - 1))) && isDynamicWizardNotActive;
      default:
        return true;
    }
  }

  setEditMode(submission) {
    if (!this.editMode && submission._id && !this.options.readOnly) {
      this.editMode = true;
      const dynamicWizard = this.hasDynamicWizard();
      if (dynamicWizard) {
        dynamicWizard.shouldUpdate = false;
        dynamicWizard.isChangingMode = false;
      }
      this.redraw();
    }
  }

  setChangingMode() {
    if (this.options.readOnly) {
      return;
    }

    const dynamicWizard = this.hasDynamicWizard();
    // If the current page contains dynamicWizard component
    if (dynamicWizard && !this.editMode && dynamicWizard.hasComponents) {
      if (dynamicWizard.shouldUpdate) {
        dynamicWizard.addRow();
        dynamicWizard.shouldUpdate = false;
        dynamicWizard.secondRender = true;
      }

      if (this.element && !this.element.classList.contains('dynamicWizard-changingMode')) {
        // helps to return nearby components, if validation.maxLength is occurred
        if (
          dynamicWizard?.editRows.length === get(dynamicWizard?.component, 'validate.maxLength')
          && !dynamicWizard.isOpen(dynamicWizard.editRows[dynamicWizard.changingRowIndex])) {
            return;
        }
        this.element.classList.add('dynamicWizard-changingMode');
        this.redraw();
      }
    }
    else if (this.element) {
      if (dynamicWizard?.isChangingMode && dynamicWizard.hasComponents) {
        dynamicWizard.isChangingMode = false;
        this.redraw();
      }
      if (this.element.classList.contains('dynamicWizard-changingMode')) {
        this.element.classList.remove('dynamicWizard-changingMode');
      }
    }
  }

  hasDynamicWizard() {
    return this.currentPage?.components.find((comp) => comp.component.type === 'dynamicWizard' && comp._parentVisible && comp._visible && !comp._disabled);
  }

  updatePages() {
    this.pages = this.allPages;
    const dynamicWizardComponent = this.hasDynamicWizard();

    if (this.element && this.element.classList.contains('dynamicWizard-changingMode') && !dynamicWizardComponent) {
      this.element.classList.remove('dynamicWizard-changingMode');
    }
  }
}
