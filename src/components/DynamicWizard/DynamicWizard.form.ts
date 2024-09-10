import { Components } from '@formio/js';
const baseEditForm = (Components.components as any).component.editForm;

import DynamicWizardEditData from './editForm/DynamicWizard.edit.data';
import DynamicWizardEditDisplay from './editForm/DynamicWizard.edit.display';
import DynamicWizardEditTemplates from './editForm/DynamicWizard.edit.templates';
import DynamicWizardEditValidation from './editForm/DynamicWizard.edit.validation';

export default function(...extend) {
  return baseEditForm([
    {
      label: 'Templates',
      key: 'templates',
      weight: 5,
      components: DynamicWizardEditTemplates
    },
    {
      key: 'display',
      components: DynamicWizardEditDisplay,
    },
    {
      key: 'data',
      components: DynamicWizardEditData,
    },
    {
      key: 'validation',
      components: DynamicWizardEditValidation
    },
    {
      key: 'addons',
      ignore: true
    },
  ], ...extend);
}
