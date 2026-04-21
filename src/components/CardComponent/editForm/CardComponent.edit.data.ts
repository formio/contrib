export default [
  {
    type: 'textfield',
    input: true,
    label: 'Image Property',
    key: 'imageProperty',
    tooltip: 'The property path in the API response containing the image URL (e.g. "data.url" or "data.image").',
    placeholder: 'data.url',
    weight: 15,
    conditional: {
      json: { '===': [{ var: 'data.dataSrc' }, 'url'] },
    },
  },
  {
    type: 'select',
    input: true,
    key: 'refreshOn',
    label: 'Refresh Options On',
    weight: 19,
    tooltip: 'Redraw when this form field changes.',
    dataSrc: 'custom',
    valueProperty: 'value',
    data: {
      custom(context: any) {
        const values = [{ label: '', value: '' }];
        context.utils.eachComponent(
          context.instance.options.editForm.components,
          (component: any, path: string) => {
            if (component.key !== context.data.key) {
              values.push({ label: component.label || component.key, value: path });
            }
          }
        );
        return values;
      },
    },
    conditional: {
      json: { '===': [{ var: 'data.dataSrc' }, 'url'] },
    },
  },
  {
    type: 'select',
    input: true,
    key: 'filterOn',
    label: 'Client Filter On',
    weight: 21,
    tooltip: 'Filter displayed cards when this form field changes (no re-fetch).',
    dataSrc: 'custom',
    valueProperty: 'value',
    data: {
      custom(context: any) {
        const values = [{ label: '', value: '' }];
        context.utils.eachComponent(
          context.instance.options.editForm.components,
          (component: any, path: string) => {
            if (component.key !== context.data.key) {
              values.push({ label: component.label || component.key, value: path });
            }
          }
        );
        return values;
      },
    },
    conditional: {
      json: { '===': [{ var: 'data.dataSrc' }, 'url'] },
    },
  },
  {
    type: 'textfield',
    input: true,
    key: 'filterProperty',
    label: 'Filter Property',
    weight: 22,
    tooltip: 'The API response property to match against (e.g. "data.make").',
    placeholder: 'data.make',
    conditional: {
      json: { '!!': { var: 'data.filterOn' } },
    },
  },
];
