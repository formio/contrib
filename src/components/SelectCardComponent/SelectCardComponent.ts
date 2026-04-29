import { Components } from '@formio/js';
import editForm from './SelectCardComponent.form';

const RadioComponent = (Components as any).components.radio;
const BaseComponent = (Components as any).components.component;

const PLACEHOLDER_SVG =
  'data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 ' +
  'width=%27400%27 height=%27300%27 viewBox=%270 0 400 300%27%3E' +
  '%3Crect fill=%27%23f5f5f0%27 width=%27400%27 height=%27300%27 rx=%274%27/%3E' +
  '%3Cpath d=%27M180 130 L220 130 L200 155 Z%27 fill=%27%23c8c8c0%27/%3E' +
  '%3Ccircle cx=%27200%27 cy=%27160%27 r=%2728%27 fill=%27none%27 ' +
  'stroke=%27%23c8c8c0%27 stroke-width=%272%27/%3E' +
  '%3Cpath d=%27M172 188 Q200 210 228 188%27 fill=%27none%27 ' +
  'stroke=%27%23c8c8c0%27 stroke-width=%272%27/%3E' +
  '%3Ctext x=%2750%25%27 y=%2775%25%27 dominant-baseline=%27middle%27 ' +
  'text-anchor=%27middle%27 font-family=%27system-ui,sans-serif%27 ' +
  'font-size=%2712%27 fill=%27%23a0a098%27 letter-spacing=%270.5%27%3E' +
  'No image%3C/text%3E%3C/svg%3E';

const CHEVRON_LEFT =
  '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" ' +
  'stroke="currentColor" stroke-width="2" stroke-linecap="round" ' +
  'stroke-linejoin="round" style="vertical-align:-2px;margin-right:4px">' +
  '<polyline points="15 18 9 12 15 6"></polyline></svg>';

const CHEVRON_RIGHT =
  '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" ' +
  'stroke="currentColor" stroke-width="2" stroke-linecap="round" ' +
  'stroke-linejoin="round" style="vertical-align:-2px;margin-left:4px">' +
  '<polyline points="9 18 15 12 9 6"></polyline></svg>';

const BREAKPOINT_WIDE = 600;

function getNestedProperty(obj: any, path: string): any {
  if (!obj || !path) return undefined;
  const parts = path.split('.');
  let current = obj;
  for (const part of parts) {
    if (current == null) return undefined;
    current = current[part];
  }
  return current;
}

export default class SelectCardComponent extends (RadioComponent as any) {
  public currentPage: number = 0;
  public pageSize: number = 0;
  public resizeObserver: ResizeObserver | null = null;
  public _rawItems: any[] = [];

  static schema(...extend: any[]) {
    return RadioComponent.schema({
      type: 'selectCardComponent',
      label: 'Select Cards',
      key: 'selectCardComponent',
      inputType: 'radio',
      values: [{ label: '', value: '', imageUrl: '' }],
      cardColumns: 3,
      cardColumnsSmall: 2,
      imageFit: 'cover',
      imageProperty: 'image',
    }, ...extend);
  }

  static get builderInfo() {
    return {
      title: 'Select Cards',
      group: 'basic',
      icon: 'picture-o',
      weight: 30,
      schema: SelectCardComponent.schema(),
    };
  }

  static editForm = editForm;

  get defaultSchema() {
    return SelectCardComponent.schema();
  }

  init() {
    super.init();
    this.currentPage = 0;
    this.pageSize = 0;
    this.resizeObserver = null;
  }

  serializeValue(itemValue: any): string {
    return (typeof itemValue === 'object') ? JSON.stringify(itemValue) : itemValue;
  }

  isSelected(itemValue: any): boolean {
    const currentValue = this.dataValue;
    if (currentValue == null || currentValue === '') return false;
    if (typeof currentValue === 'object') {
      return JSON.stringify(currentValue) === JSON.stringify(itemValue);
    }
    return String(currentValue) === String(itemValue);
  }

  getInputAttrs(): string {
    const input = this.inputInfo;
    if (!input || !input.attr) return '';
    let attributes = '';
    for (const attr in input.attr) {
      if (input.attr.hasOwnProperty(attr)) {
        attributes += ' ' + attr + '="' + input.attr[attr] + '"';
      }
    }
    return attributes;
  }

  render() {
    const allItems = this.getVisibleItems();
    const pageItems = this.getPageItems(allItems);
    // Skip RadioComponent.render — it takes no argument and always calls
    // renderTemplate('radio', ...), which would discard our grid HTML. Call
    // the base Component.render directly, which accepts `children` and wraps
    // them with the component chrome (label, errors, etc.).
    return BaseComponent.prototype.render.call(this, this.renderTemplate('selectCardComponent', {
      component: this.component,
      items: pageItems,
      currentPage: this.currentPage || 0,
      totalPages: this.getTotalPages(allItems),
      cardColumns: this.component.cardColumns || 3,
      cardColumnsSmall: this.component.cardColumnsSmall || 2,
      imageFit: this.component.imageFit || 'cover',
      instanceId: this.id,
      componentKey: this.component.key || '',
      inputAttrs: this.getInputAttrs(),
      chevronLeft: CHEVRON_LEFT,
      chevronRight: CHEVRON_RIGHT,
      isSelected: (v: any) => this.isSelected(v),
      serializeValue: (v: any) => this.serializeValue(v),
    }));
  }

  getVisibleItems(): any[] {
    const allItems = this.loadedOptions || this.component.values || [];
    const filterOn = this.component.filterOn;
    const filterProperty = this.component.filterProperty;

    // Filter logic only applies to URL data sources where we've actually
    // received raw items from setItems(). In values mode, _rawItems is
    // never populated, so skip the filter and return the inline values
    // directly — otherwise the preview/render is empty when the form
    // hasn't picked a filter value (e.g. for insurance cards which use
    // values mode without filterOn configured anyway).
    if (filterOn && filterProperty && this._rawItems && this._rawItems.length > 0 && this.root) {
      const submissionData = this.root.submission ? this.root.submission.data : {};
      const filterValue = getNestedProperty(submissionData, filterOn);
      // Filter is configured but the watched field is empty — show
      // nothing until the user picks a value, instead of dumping every
      // item below an empty filter.
      if (!filterValue) {
        return [];
      }
      const filteredItems: any[] = [];
      for (let i = 0; i < allItems.length; i++) {
        const rawItem = this._rawItems[i];
        if (rawItem && String(getNestedProperty(rawItem, filterProperty)) === String(filterValue)) {
          filteredItems.push(allItems[i]);
        }
      }
      return filteredItems;
    }

    return allItems;
  }

  getPageItems(items: any[]): any[] {
    const cardColumnsSmall = this.component.cardColumnsSmall || 2;
    const pageSize = this.pageSize > 0 ? this.pageSize : (cardColumnsSmall * cardColumnsSmall);
    if (this.pageSize <= 0) {
      this.pageSize = pageSize;
    }

    const currentPage = this.currentPage || 0;
    const startIndex = currentPage * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
  }

  getTotalPages(items: any[]): number {
    const cardColumnsSmall = this.component.cardColumnsSmall || 2;
    const pageSize = this.pageSize > 0 ? this.pageSize : (cardColumnsSmall * cardColumnsSmall);
    return pageSize > 0 ? Math.ceil(items.length / pageSize) || 1 : 1;
  }

  attach(element: HTMLElement) {
    this.loadRefs(element, {
      input: 'multiple',
      wrapper: 'multiple',
      cardGrid: 'single',
      prevButton: 'single',
      nextButton: 'single',
      pageIndicator: 'single',
    });

    // Card click delegation
    if (this.refs.wrapper) {
      this.refs.wrapper.forEach((wrapper: HTMLElement, index: number) => {
        this.addEventListener(wrapper, 'click', (event: Event) => {
          const radioInput = this.refs.input[index];
          if (event.target !== radioInput && radioInput) {
            radioInput.click();
          }
        });
      });
    }

    // Image error fallbacks
    if (this.refs.cardGrid) {
      this.refs.cardGrid.querySelectorAll('img').forEach((img: HTMLImageElement) => {
        this.addEventListener(img, 'error', () => {
          img.src = PLACEHOLDER_SVG;
        });
      });
    }

    // Pagination
    if (this.refs.prevButton) {
      this.addEventListener(this.refs.prevButton, 'click', () => {
        if (this.currentPage > 0) {
          this.currentPage--;
          this.redraw();
        }
      });
    }
    if (this.refs.nextButton) {
      this.addEventListener(this.refs.nextButton, 'click', () => {
        const items = this.getVisibleItems();
        const totalPages = this.getTotalPages(items);
        if (this.currentPage < totalPages - 1) {
          this.currentPage++;
          this.redraw();
        }
      });
    }

    // Resize observer for responsive columns
    if (this.refs.cardGrid && typeof ResizeObserver !== 'undefined') {
      this.resizeObserver = new ResizeObserver((entries) => {
        const width = entries[0].contentRect.width;
        const cardGrid = this.refs.cardGrid;
        if (!cardGrid) return;
        const colCount = width >= BREAKPOINT_WIDE
          ? (this.component.cardColumns || 3)
          : (this.component.cardColumnsSmall || 2);
        cardGrid.className = cardGrid.className.replace(/cc-grid--cols-\d/g, 'cc-grid--cols-' + colCount);
        const newPageSize = colCount * colCount;
        if (newPageSize !== this.pageSize) {
          this.pageSize = newPageSize;
          this.redraw();
        }
      });
      this.resizeObserver.observe(this.refs.cardGrid);
    }

    return super.attach(element);
  }

  detach(element?: HTMLElement) {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
    super.detach(element);
  }

  setItems(items: any[]) {
    super.setItems(items);
    this._rawItems = items ? items.slice() : [];
    const imageProperty = this.component.imageProperty || 'image';
    if (items && this.loadedOptions) {
      for (let i = 0; i < items.length; i++) {
        if (this.loadedOptions[i] && items[i]) {
          this.loadedOptions[i].imageUrl = getNestedProperty(items[i], imageProperty) || '';
        }
      }
    }
  }
}
