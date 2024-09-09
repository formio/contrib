import { Components, Utils } from '@formio/js';
const EditGrid = (Components as any).components.editgrid;
const NestedComponent = (Components as any).components.nested;
import editForm from './DynamicWizard.form';
import templates from './templates';
const { _ } = Utils;
const { get, set, each, isNil, clone, findIndex, isFinite, cloneDeep, isArray } = _;

const FormState = {
  New: 'new',
  Editing: 'editing',
  Saved: 'saved',
  Removed: 'removed',
  Draft: 'draft',
};

export default class DynamicWizard extends (EditGrid as any) {
  static schema(...extend) {
    return EditGrid.schema({
      type: 'dynamicWizard',
      label: 'Dynamic Wizard',
      key: 'dynamicWizard',
      templates: {
        header: DynamicWizard.defaultHeaderTemplate,
        row: DynamicWizard.defaultRowTemplate,
        footer: '',
      },
    }, ...extend);
  }

  static get builderInfo(): object {
    return {
      title: 'Dynamic Wizard',
      group: 'premium',
      documentation: '/userguide/form-building/premium-components#dynamic-wizard',
      showPreview: false,
      icon: 'tasks',
      ignoreForForm: true,
      disableSiblings: true,
      weight: 20,
      schema: DynamicWizard.schema(),
    };
  }

  static savedValueTypes(schema) {
    return Utils.getComponentSavedTypes(schema) || [Utils.componentValueTypes.array];
  }

  public static editForm = editForm;

  static get defaultHeaderTemplate() {
    return `<div class="row" role="row">
    <div class="col-sm-2">
      Users
    </div>
  </div>`;
  }

  static get defaultRowTemplate() {
    return `<div class="list-group-item">
    <div class="list-group-subheader">
      <div class="row" role="row">
        <div class="col-sm-2">
          User {{ rowIndex + 1 }}
        </div>
        {% if (!ctx.self.options.readOnly && !component.disabled) { %}
        <div class="col-sm-2" role="gridcell">
          <div class="btn-group pull-right">
            <button class="btn btn-default btn-light btn-sm editCard" aria-label="{{ ctx.t('Edit row ' + (rowIndex + 1)) }}"><i class="{{ ctx.iconClass('edit') }}"></i></button>
            {% if (!instance.hasRemoveButtons || instance.hasRemoveButtons()) { %}
            <button class="btn btn-danger btn-sm removeRow" aria-label="{{ ctx.t('Remove row ' + (rowIndex + 1)) }}"><i class="{{ ctx.iconClass('trash') }}"></i></button>
            {% } %}
          </div>
        </div>
        {% } %}
      </div>
    </div>
    {% ctx.util.eachComponent(ctx.components, function(component) { %}
    {% if ((!component.hasOwnProperty('tableView') || component.tableView) && isVisibleInRow(component)) { %}
    <div class="row" role="row">
      <div class="col-sm-2" role="gridcell">
        {{ component.key }}
      </div>
    </div>
    <div class="row" role="row">
      <div class="col-sm-2" role="gridcell">
        {{ ctx.getView(component, ctx.row[component.key]) }}
      </div>
    </div>
    {% } %}
    {% }) %}
  </div>`;
  }

  get dynamicWizardKey() {
    return `dynamicWizard-${this.key}`;
  }

  get rowRef() {
    return `${this.dynamicWizardKey}-row`;
  }

  get rowElements() {
    return this.refs[this.rowRef];
  }

  get rowRefs() {
    return this.refs[`dynamicWizard-${this.component.key}-row`];
  }

  get agreeButtonRef() {
    return `${this.dynamicWizardKey}-agreeButton`;
  }

  get denyButtonRef() {
    return `${this.dynamicWizardKey}-denyButton`;
  }

  get agreeButtonElements() {
    return this.refs[this.agreeButtonRef];
  }

  get cancelRowRef() {
    return `${this.dynamicWizardKey}-cancelRow`;
  }

  get cancelRowElements() {
    return this.refs[this.cancelRowRef];
  }

  get inlineEditMode() {
    return this.component.inlineEdit;
  }

  get saveEditMode() {
    return !this.inlineEditMode;
  }

  get rootWizard() {
    return this.findRootWizard(this.parent?.parent) || {};
  }

  get hasComponents() {
    return this.component.components.length;
  }

  get buttons() {
    const buttons = {};
    [
      { name: 'cancel', method: 'cancelRow' },
      { name: 'previous', method: 'prevPage' },
      { name: 'next', method: 'nextPage' },
    ].forEach((button) => {
      if (this.hasButton(button.name)) {
        buttons[button.name] = button;
      }
    });
    return buttons;
  }

  get defaultSchema() {
    return DynamicWizard.schema()
  }

  constructor(...args) {
    super(...args);
    this.type = 'dynamicWizard';
    this.isChangingMode = true;
    this.isSavingInProgress = false;
    this.editRows = [];
    this.changingRowIndex = null;
    this.step = 0;
    this.buttonSettings = {
      showPrevious: true,
      showNext: true,
      showSubmit: true,
      showCancel: !this.options.readOnly
    }
    this.shouldUpdate = true;
  }

  init(secondRender, prevVisibility = this._visible) {
    this.prevVisibility = prevVisibility;
    this.prevBlocking = this.disabled;
    this.secondRender = !!secondRender;
    this.shouldUpdate = true;
    this.changingRowIndex = null;
    if (this.builderMode) {
      this.editRows = [];
    }

    return super.init();
  }

  public render(children) {
    if (this.builderMode) {
      return super.render();
    }

    const dataValue = this.dataValue || [];
    const headerTemplate = Utils.Evaluator.noeval ? templates.header : get(this.component, 'templates.header');
    const editRow = this.editRows[this.changingRowIndex];

    if (this.step === 0 && editRow && !editRow.components[this.step]._visible) {
      this.nextPage();
    }

    const reset = !this.editRows.length && this.step === 0 && this.changingRowIndex === 0;
    if (((!this.secondRender && this.shouldUpdate) || reset) && !this.options.readOnly) {
      this.secondRender = true;

      if (!this.rootWizard.editMode) {
        const onFirstPage = this.root.page === 0 && this.page === this.root.page;
        if (onFirstPage && this._parentVisible && this._visible && !this._disabled && this.hasComponents) {
          this.shouldUpdate = false;
          this.isInitRowExists = true;
          this.addRow(true, reset);
        }
      }
    }

    if (this.root?.editMode && this.rootWizard.editMode && this.isInitRowExists) {
      this.isInitRowExists = false;
      this.cancelRow();
    }

    return super.render(children || this.renderTemplate('dynamicWizard', {
      ref: {
        row: this.rowRef,
        agreeButton: this.agreeButtonRef,
        denyButton: this.denyButtonRef,
      },
      header: this.renderString(headerTemplate),
      footer: this.renderString(get(this.component, 'templates.footer'), {
        components: this.component.components,
        value: dataValue,
      }),
      rows: this.editRows.map(this.renderRow.bind(this)),
      currentComponent: this.step === -1 ? null : this.editRows[this.changingRowIndex]?.components[this.step]?.render(),
      errors: this.editRows.map((row) => row.error),
      buttons: this.buttons,
      hasAddButton: this.hasAddButton(),
      hasRemoveButtons: this.hasRemoveButtons(),
      isChangingMode: this.isChangingMode,
      isDisabled: this._disabled,
      isBlocking: !this._visible || this._disabled || !this.hasComponents,
      dynamicWizardKey: this.dynamicWizardKey,
      readOnly: this.options.readOnly,
    }));
  }

  attach(element: HTMLElement) {
    const superAttach = super.attach(element);
    if (this.builderMode) {
      return super.attach(element);
    }

    this.visibilityCheck();
    this.blockingCheck();

    this.loadRefs(element, {
      [this.agreeButtonRef]: 'multiple',
      [this.denyButtonRef]: 'multiple',
      [this.rowRef]: 'multiple',
      [`${this.dynamicWizardKey}-cancel`]: 'single',
      [`${this.dynamicWizardKey}-previous`]: 'single',
      [`${this.dynamicWizardKey}-next`]: 'single',
    });
    this.agreeButtonElements.forEach((agreeButton) => {
      this.addEventListener(agreeButton, 'click', () => {
        this.addRow();

        if (this.rootWizard.currentNextPage === -1) {
          this.rootWizard.redraw();
        }
      }
      );
    });

    this.attachNav();

    if (!this.isChangingMode) {
      this.rowElements.forEach((row, rowIndex) => {
        // Attach edit and remove button events.
        [
          {
            className: 'removeCard',
            event: 'click',
            action: () => this.removeRow(rowIndex),
          },
          {
            className: 'editCard',
            event: 'click',
            action: () => {
              this.editRow(rowIndex);
            },
          },
        ].forEach(({
          className,
          event,
          action,
        }) => {
          const elements = row.getElementsByClassName(className);
          Array.prototype.forEach.call(elements, (element) => {
            this.addEventListener(element, event, action);
          });
        });
      });
    } else {
      const editRow = this.editRows[this.changingRowIndex];
      if (editRow) {
        this.attachComponents(this.rowElements[0], editRow.components, this.component.components, true);
      }
    }

    return superAttach;
  }

  attachNav() {
    each(this.buttons, (button) => {
      const buttonElement = this.refs[`${this.dynamicWizardKey}-${button.name}`];
      this.addEventListener(buttonElement, 'click', (event) => {
        event.preventDefault();
        const cancelRedraw = this[button.method]();

        if (cancelRedraw && button.method === 'nextPage') {
          return;
        }
        this.redraw().then(() => {
          this.afterAttachNav(button.method);
        });

        const editRow = this.editRows[this.changingRowIndex];

        if (editRow) {
          this.validateRow(editRow, false);
        }
      });
    });
  }

  afterAttachNav(method) {
    const editRow = this.editRows[this.changingRowIndex];
    switch (method) {
      case 'prevPage':
      case 'nextPage':
        if (this.step === -1) {
          this.agreeButtonElements[0].focus();
        } else {
          const input = editRow.components[this.step].refs?.input;
          input ? input[0].focus() : this.focusOnNewRowElement(editRow.components, this.step);
        }
    }
  }

  attachComponents(element, components, container = this.component.components, isDynamicWizard) {
    if (this.builderMode) {
      return super.attachComponents(element, components, container);
    }
    if (!isDynamicWizard) {
      return;
    }
    components = components || this.component.components;

    element = this.hook('attachComponents', element, components, container, this);
    if (!element) {
      // Return a non-resolving promise.
      return (new Promise(() => {
        // empty
      }));
    }

    let index = 0;
    const promises = [];
    if (!this.isChangingMode) {
      Array.prototype.slice.call(element.children).forEach(child => {
        if (!child.getAttribute('data-noattach') && components[index]) {
          promises.push(components[index].attach(child));
          index++;
        }
      });
    } else if (!isNil(this.step) && element.children[0] && !element.children[0]?.getAttribute('data-noattach') && components[this.step]) {
      promises.push(components[this.step].attach(element.children[0]));
    }

    return Promise.all(promises);
  }

  visibilityCheck() { // start changingMode when the component becomes visible by condition
    if (this.page === this.root.page) {
      if (this._visible && !this.prevVisibility) {
        this.prevVisibility = true;
        if (!this.disabled && this.hasComponents) {
          this.addRow();
        }
      }
      if (this.prevVisibility && !this._visible) {
        this.prevVisibility = false;
      }
    }
  }
  blockingCheck() { // show agreeButton when component is no longer disabled
    if (this.page === this.root.page && this.prevBlocking && !this.disabled) {
      this.prevBlocking = false;
      this.isChangingMode = false;

      this.rootWizard.redraw();
    }
  }

  isOpen(editRow) {
    return [FormState.New, FormState.Editing].includes(editRow?.state);
  }

  resetValue() {
    NestedComponent.prototype.resetValue.call(this);
    this.emptyRows();
    this.step = 0;
    this.addRow(true, true);
  }

  addRow(firstPage = false, reset = false) {
    if (this.options.readOnly) {
      return;
    }

    if (!this.hasAddButton() && !this.isOpen(this.editRows[this.changingRowIndex]))  {
      if (this.isChangingMode) {
        this.isChangingMode = false;
      }
      this.rootWizard.element.classList.remove('dynamicWizard-changingMode');
      this.rootWizard.redraw();
      return;
    }

    const dataObj = {};
    const rowIndex = this.editRows.length;
    let editRow;

    if (isNil(this.changingRowIndex) || reset) {
      this.changingRowIndex = this.editRows.length;
      editRow = {
        components: this.createRowComponents(dataObj, rowIndex),
        data: dataObj,
        state: FormState.New,
        backup: null,
        error: null,
      };
      this.editRows.push(editRow);

      if (this.inlineEditMode) {
        this.dataValue.push(dataObj);
        this.triggerChange();
      }
      this.checkRow('checkData', null, {}, editRow.data, editRow.components);
      if (this.component.modal) {
        this.addRowModal(rowIndex);
      }
    }

    this.isChangingMode = true;
    this.step = this.step !== -1 ? this.step : 0;

    this.addChangingMode(firstPage);

    return editRow || this.editRows[this.changingRowIndex];
  }

  cancelRow() {
    const rowIndex = clone(this.changingRowIndex);
    if (this.options.readOnly) {
      return;
    }

    const editRow = this.editRows[rowIndex];
    if (editRow?.state === FormState.New) {
      if (this.isSavingInProgress) {
        this.removeRow(rowIndex);
      }
      else {
        editRow.state = FormState.Removed;

        this.clearErrors(rowIndex);
        this.destroyComponents(rowIndex);
        if (this.inlineEditMode) {
          this.splice(rowIndex);
        }
        this.editRows.splice(rowIndex, 1);
      }
    }
    else if (editRow?.state === FormState.Editing) {
      editRow.state = editRow.prevState;

      if (this.inlineEditMode) {
        this.dataValue[rowIndex] = editRow.backup;
      }
      editRow.data = editRow.backup;
      editRow.backup = null;

      if (this.isSavingInProgress) {
        this.setValues(editRow);
        this.rebuild(true);
      }

      this.restoreRowContext(editRow);

      if (!this.component.rowDrafts) {
        this.clearErrors(rowIndex);
      }
    }

    this.returnPrevPageState();

    this.shouldUpdate = true;

    this.emit('cancelRow');

    this.checkValidity(null, true);
    this.redraw().then(() => {
      this.afterCancelRow();
    });

    if (this.component.rowDrafts) {
      this.checkValidity(this.data, false);
    }
  }

  afterCancelRow() {
    this.agreeButtonElements[0].focus();
  }

  rebuild(secondRender = false) {
    this.destroy();
    this.init(secondRender, this.prevVisibility);
    this.visible = this.conditionallyVisible(null, null);
    return this.redraw();
  }

  returnPrevPageState() {
    this.isChangingMode = false;
    this.isSavingInProgress = false;
    this.step = -1;
    this.changingRowIndex = null;
    this.removeChangingMode();
  }

  setValues(editRow) {
    if (this.options.readOnly) {
      return;
    }

    if (this.saveEditMode) {
      const dataValue = this.dataValue || [];
      if (editRow?.state === FormState.New && !this.isSavingInProgress) {
        const newIndex = dataValue.length;
        dataValue.push(editRow?.data);
        if (this.changingRowIndex !== newIndex) {
          this.editRows.splice(this.changingRowIndex, 1);
          this.editRows.splice(this.changingRowIndex, 0, editRow);
        }
      }
      else if (editRow?.state === FormState.Editing || this.isSavingInProgress) {
        dataValue[this.changingRowIndex] = editRow?.data;
      }
    }
  }

  saveRow(isRowValid) {
    const editRow = this.editRows[this.changingRowIndex];

    if (editRow) {
      this.setValues(editRow);
      if (this.isSavingInProgress) {
        this.isSavingInProgress = false;
      }

      editRow.state = this.component.rowDrafts && !isRowValid ? FormState.Draft : FormState.Saved;
      editRow.backup = null;

      this.updateValue();
      this.triggerChange();
      if (this.component.rowDrafts) {
        editRow.components.forEach(comp => comp.setPristine(this.pristine));
      }
      this.checkValidity(null, true);
      this.redraw().then(() => {
        this.emit('saveRow');
        if (this.afterSaveRow) {
          this.afterSaveRow();
        }
      });

      if (editRow.alerts) {
        editRow.alerts = false;
      }

      this.isChangingMode = false;
      this.changingRowIndex = null;
      this.shouldUpdate = true;

      this.removeChangingMode();
    }
    return true;
  }

  saveCurrentPageData(editRow) {
    if (editRow?.state === FormState.New || editRow?.state === FormState.Editing) {
      this.setValues(editRow);
      this.checkData(this.data);
      if (!this.isSavingInProgress) {
        this.isSavingInProgress = true;
      }
    }
  }

  isRowEditing(editRow) {
    return editRow?.state === FormState.Editing || editRow?.state === FormState.New;
  }

  switchToStep(component) {
    const relativePath = this.getRelativePath(component.path);
    const arrayPath = (Utils as any).getArrayFromComponentPath(relativePath);
    const step = findIndex(this.components, (comp) => comp.key === component.component.key);
    const editRow = this.editRows[arrayPath[0]];
    const isAlreadyEditing = this.isRowEditing(editRow);

    if (!editRow) {
      this.addRow();
    }
    else if (!isAlreadyEditing) {
      this.editRow(arrayPath[0], step);
    }
    else {
      this.step = isFinite(step) ? step : 0;
      this.addChangingMode();
      this.validateRow(editRow, false);
    }
  }

  editRow(rowIndex, step?) {
    const editRow = this.editRows[rowIndex];
    const isAlreadyEditing = this.isRowEditing(editRow);

    if (!editRow || isAlreadyEditing) {
      return;
    }
    editRow.prevState = editRow.state;
    editRow.state = FormState.Editing;

    const dataSnapshot = cloneDeep(editRow.data);

    if (this.inlineEditMode) {
      editRow.backup = dataSnapshot;
    }
    else {
      editRow.backup = editRow.data;
      editRow.data = dataSnapshot;
      this.restoreRowContext(editRow);
    }

    if (this.component.modal) {
      return this.addRowModal(rowIndex);
    }

    this.isChangingMode = true;
    this.changingRowIndex = rowIndex;
    this.step = isFinite(step) ? step : 0;

    this.addChangingMode();
    this.validateRow(editRow, false);
  }

  removeRow(rowIndex) {
    if (this.options.readOnly) {
      return;
    }

    this.baseRemoveRow(rowIndex);
    this.splice(rowIndex);
    this.editRows.splice(rowIndex, 1);
    this.updateRowsComponents(rowIndex);
    this.updateValue();
    this.triggerChange();
    this.checkValidity(null, true);
    this.checkData();
    this.redraw().then(() => {
      this.afterRemoveRow();
    });
    this.shouldUpdate = true;
  }

  afterRemoveRow() {
    this.agreeButtonElements[0].focus();
  }

  renderRow(row, rowIndex) {
    const dataValue = this.dataValue || [];
    const flattenedComponents = this.flattenComponents(rowIndex);
    const rowTemplate = Utils.Evaluator.noeval ? templates.row : get(this.component, 'templates.row', DynamicWizard.defaultRowTemplate);

    return this.renderString(
      rowTemplate,
      {
        row: dataValue[rowIndex] || {},
        data: this.data,
        rowIndex,
        components: this.component.components,
        flattenedComponents,
        isVisibleInRow: (component) => this.isComponentVisibleInRow(component, flattenedComponents),
        getView: (component, data) => {
          const instance = flattenedComponents[component.key];
          let view = instance ? instance.getView(data || instance.dataValue) : '';

          if (instance && instance.widget && (view !== '--- PROTECTED ---')) {
            if (isArray(view)) {
              view = view.map((value) => instance.widget.getValueAsString(value));
            }
            else {
              view = instance.widget.getValueAsString(view);
            }
          }

          return view;
        },
        state: this.editRows[rowIndex].state,
      },
    );
  }

  hasButton(name, nextPage = this.getNextPage()) {
    // get page options with global options as default values
    const {
      previous = this.buttonSettings.showPrevious,
      cancel = this.buttonSettings.showCancel,
      next = this.buttonSettings.showNext
    } = this.buttonSettings;

    switch (name) {
      case 'previous':
        return previous && this.step !== 0 && this.hasComponents;
      case 'next':
        return next && nextPage && this.hasComponents;
      case 'cancel':
        return cancel && this.hasComponents;
      default:
        return true;
    }
  }

  getNextPage() {
    return this.step < this.component?.components.length;
  }

  prevPage() {
    const editRow = this.editRows[this.changingRowIndex];

    if (this.step === 0) {
      this.rootWizard.prevPage();
      return;
    }
    else {
      const currStep = clone(this.step);
      this.step = currStep - 1;
      if (!editRow?.components?.[this.step]?._visible) {
        this.prevPage();
        return;
      }

      this.saveCurrentPageData(editRow);
    }
  }

  findRootWizard(component) {
    let root = component?.parent?.parent;

    if (component?.parent?.subForm) {
      root = root?.parent;
    }

    return root && root?._form?.display === 'wizard' ? this.findRootWizard(root) : component;
  }

  nextPage() {
    const editRow = this.editRows[this.changingRowIndex];
    const isRowValid = this.validateRow(editRow, true).length === 0;

    if (!this.component.rowDrafts) {
      if (!isRowValid) {
        return true;
      }
    }

    if (this.step === this.component?.components?.length - 1) {
      this.step = -1;
      this.saveRow(isRowValid);

      if (this.rootWizard.currentNextPage === -1) {
        this.rootWizard.redraw();
      }

      return false;
    }
    const prevStep = clone(this.step);
    this.step = prevStep + 1;

    if (!editRow?.components?.[this.step]?._visible) {
      this.nextPage();
      return;
    }

    this.saveCurrentPageData(editRow);
  }

  validateStep(component, valid, dirty, editRow) {
    let isValid = valid;
    const hasServerError = !!(component.serverErrors && component.serverErrors.length);

    if (!this.component.rowDrafts && !hasServerError) {
      component.setPristine(!dirty);
    }

    const rootValue = JSON.parse(JSON.stringify(this.rootValue));
    const editGridValue = get(rootValue, this.path, []);
    editGridValue[this.step] = editRow.data;
    set(rootValue, this.path, editGridValue);
    isValid = isValid && component.checkValidity(rootValue, dirty, editRow.data);
    return isValid;
  };

  validateRow(editRow, dirty) {
    let valid = true as any;

    if (!editRow) {
      return [];
    }

    const errorsSnapshot = [...this.errors];

    if (editRow.state === FormState.Editing || dirty || (editRow.state === FormState.Draft && !this.pristine && !this.root.pristine)) {
      const component = editRow.components[this.step];

      if (component) {
        valid = this.validateStep(component, valid, dirty, editRow);
      }
      else if (this.step === -1) {
        editRow.components.forEach(comp => {
          valid = this.validateStep(comp, valid, dirty, editRow);
        });
      }
    }

    if (this.component.validate && this.component.validate.row) {
      valid = this.evaluate(this.component.validate.row, {
        valid,
        row: editRow.data
      }, 'valid', true);
      if (valid.toString() !== 'true') {
        editRow.error = valid;
        valid = false;
      }
      else {
        editRow.error = null;
      }
      if (valid === null) {
        valid = `Invalid row validation for ${this.key}`;
      }
    }

    editRow.errors = !valid ? this.errors.filter((err) => !errorsSnapshot.includes(err)) : [];
    this.showRowErrorAlerts(editRow, !!valid);
    return editRow.errors;
  }

  findSourceRoot(root) {
    return root?.parent ? this.findSourceRoot(root?.root) : root;
  }

  changeState(changed) {
    const sourceRoot = this.root ? this.findSourceRoot(this.root) : {};
    if (changed && !sourceRoot.submissionInProcess) {
      !this.prevVisibility && this._visible ? this.rebuild(this.secondRender) : this.rebuild();
    }
    else {
      this.redraw();
    }
  }

  addChangingMode(firstPage = false) {
    if (this.rootWizard.element) {
      if (!this.rootWizard.element.classList.contains('dynamicWizard-changingMode')) {
        this.rootWizard.element.classList.add('dynamicWizard-changingMode');
      }

      if (!firstPage) {
        this.redraw().then(() => {
          this.afterAddChangingMode();
        });
        this.rootWizard.redraw();
      }

      this.triggerChange();
    }
  }

  afterAddChangingMode() {
    const editRow = this.editRows[this.changingRowIndex];
    if (editRow.components[this.step].refs?.input) {
      editRow.components[this.step].refs?.input[0].focus();
    } else {
      this.focusOnNewRowElement(editRow.components, this.step);
    }
  }

  removeChangingMode() {
    if (this.rootWizard?.element) {
      this.rootWizard.element.classList.remove('dynamicWizard-changingMode');
      this.redraw().then(() => {
        if (this.afterRemoveChangingMode) {
          this.afterRemoveChangingMode();
        }
      });
      this.rootWizard.redraw();

      this.triggerChange();
    }
  }

  getValueAsString(value, options) {
    if (options?.email) {
      let result = (`
        <table border="1" style="width:100%">
          <thead>
            <tr>
      `);

      this.component.components?.forEach((component) => {
        const label = component.label || component.key;
        result += `<th style="padding: 5px 10px;">${label}</th>`;
      });

      result += (`
          </tr>
        </thead>
        <tbody>
      `);

      this.iteratableRows.forEach(({ components }) => {
        result += '<tr>';
        each(components, (component) => {
          result += '<td style="padding:5px 10px;">';
          if (component.isInputComponent && component.visible && !component.skipInEmail) {
            result += component.getView(component.dataValue, options);
          }
          result += '</td>';
        });
        result += '</tr>';
      });

      result += (`
          </tbody>
        </table>
      `);

      return result;
    }

    if (!value || !value.length) {
      return '';
    }

    return super.getValueAsString(value, options);
  }
  }
