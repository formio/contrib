import { Components } from '@formio/js';
const componentEditForm = (Components.components as any).component.editForm;
import TreeEditData from './editForm/Tree.edit.data';
import TreeDisplayData from './editForm/Tree.edit.display';

export default function(...extend) {
  return componentEditForm([
    {
      key: 'display',
      components: TreeDisplayData,
    },
    {
      key: 'data',
      components: TreeEditData,
    },
  ], ...extend);
}
