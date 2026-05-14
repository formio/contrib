import { Components } from '@formio/js';
import RadioCardEditData from './editForm/RadioCard.edit.data';
import RadioCardEditDisplay from './editForm/RadioCard.edit.display';

const radioEditForm = (Components as any).components.radio.editForm;

function findTab(editForm: any, tabKey: string): any {
  for (const tab of editForm.components) {
    if (tab.type === 'tabs' || tab.key === 'tabs') {
      const tabComponents = tab.components || [];
      for (const child of tabComponents) {
        if (child.key === tabKey) return child;
      }
    }
  }
  return null;
}

function addImageUrlColumnToValuesGrid(dataTab: any): void {
  for (const comp of dataTab.components) {
    if (comp.key === 'values' && comp.type === 'datagrid') {
      comp.components = (comp.components || []).filter((c: any) => c.key !== 'shortcut');
      comp.components.push({
        label: 'Image URL',
        key: 'imageUrl',
        input: true,
        type: 'textfield',
        placeholder: 'https://example.com/image.jpg',
      });
    }
  }
}

export default function(...extend: any[]) {
  const form = radioEditForm([
    { key: 'data', components: RadioCardEditData },
    { key: 'display', components: RadioCardEditDisplay },
  ], ...extend);

  // Post-process: modify the inherited values datagrid to add imageUrl column
  const dataTab = findTab(form, 'data');
  if (dataTab) {
    addImageUrlColumnToValuesGrid(dataTab);
  }

  return form;
}
