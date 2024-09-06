import { Components } from '@formio/js';
import ResourceEditDisplay from './editForm/Resource.edit.display';

export default function(...extend) {
  return Components.baseEditForm([
    {
      key: 'display',
      components: ResourceEditDisplay
    },
  ], ...extend);
}
