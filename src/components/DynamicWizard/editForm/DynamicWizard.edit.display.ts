function showHideColumnByDefault(context: any) {
  return context?.instance.options?.flags?.isInDataTable &&
  !['hidden', 'columns', 'panel', 'table', 'tabs', 'well', 'fieldset']
    .includes(context.data.type);
};

function dataTableConfigFields() {
  return [
    {
      key: 'display',
      components: [
        {
          weight: 442,
          type: 'number',
          input: true,
          key: 'columnWeight',
          label: 'Column weight in DataTable',
          placeholder: '0',
          defaultValue: 0,
          tooltip: 'Make columns appear in a different order in the table.',
          customConditional(context) {
            return showHideColumnByDefault(context)
          }
        },
        {
          weight: 1370,
          type: 'checkbox',
          label: 'Hide column in Data Table by default',
          tooltip: 'Hide column in Data Table by default.',
          key: 'hideColumnByDefault',
          input: true,
          customConditional(context) {
            return showHideColumnByDefault(context);
          }
        },
        {
          label: 'Disable sorting and filtering in Data Table',
          tooltip: 'if enabled, sorting and filtering is disabled for this column.',
          tableView: false,
          key: 'disableSortingAndFiltering',
          type: 'checkbox',
          input: true,
          weight: 1390,
          defaultValue: false,
          customConditional(context) {
            return showHideColumnByDefault(context);
          }
        },
        {
          label: 'Column Query Property',
          weight: 445,
          tooltip:'The component property to use it in API driven Data Table queries for filtering and sorting. If the property is not defined, the component key will be used instead.',
          tableView: true,
          key: 'columnQueryProperty',
          type: 'textfield',
          input: true,
          customConditional(context) {
            return showHideColumnByDefault(context);
          },
        },
      ]
    }
  ]
}

export default [
  {
    key: 'placeholder',
    ignore: true,
  },
  {
    key: 'modalEdit',
    ignore: true,
  },
  ...dataTableConfigFields()
];
