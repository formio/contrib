export default {
  type: 'form',
  components: [
    {
      title: 'Page 1',
      label: 'Page 1',
      type: 'panel',
      key: 'page1',
      components: [
        {
          label: 'Dynamic Wizard',
          tableView: false,
          rowDrafts: false,
          key: 'dynamicWizard',
          type: 'dynamicWizard',
          input: true,
          components: [],
        },
      ],
      input: false,
      tableView: false,
    },
  ],
  title: 'DW Empty',
  display: 'wizard',
  name: 'dwEmpty',
  path: 'dwempty',
};
