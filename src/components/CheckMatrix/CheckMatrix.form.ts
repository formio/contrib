import { Components } from '@formio/js';
const nestedComponentForm = (Components.components.nested as any).editForm;
import CheckMatrixEditDisplay from './editForm/CheckMatrix.edit.display';
export default function(...extend) {
  return nestedComponentForm([
    {
      key: 'display',
      components: CheckMatrixEditDisplay
    }
  ], ...extend);
}
