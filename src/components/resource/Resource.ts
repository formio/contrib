import { Components } from '@formio/js';
const SelectComponent = (Components.components as any).select;
import editForm from './Resource.form';

export default class ResourceComponent extends SelectComponent {
  static editForm = editForm;

  static schema(...extend) {
    return SelectComponent.schema({
      type: 'resource',
      label: 'Resource',
      key: 'resource',
      dataSrc: 'resource',
      resource: '',
      project: '',
      template: '<span>{{ item.data }}</span>',
    }, ...extend);
  }

  static get builderInfo() {
    return {
      title: 'Resource',
      icon: 'files-o',
      weight: 90,
      documentation: '/userguide/form-building/form-components#resource',
      schema: ResourceComponent.schema(),
    };
  }

  constructor(...args) {
    super(...args);
  }

  init() {
    super.init();
    this.component.dataSrc = 'resource';
    this.component.data = {
      resource: this.component.resource,
    };
  }

  get defaultSchema() {
    return ResourceComponent.schema();
  }
}
