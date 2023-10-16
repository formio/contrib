import { Components } from 'formiojs';
import ResourceEditDisplay from './editForm/Resource.edit.display';

export default function(...extend) {
  return Components.baseEditForm([
    {
      key: 'display',
      components: ResourceEditDisplay
    },
  ], ...extend);
}
