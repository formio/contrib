export default {
  _id: '6081383bfc88e7048cbe50ee',
  type: 'form',
  tags: [],
  owner: '6038bed737595d104cfc358a',
  components: [
    {
      title: 'Inner Page 1',
      breadcrumbClickable: true,
      buttonSettings: {
        previous: true,
        cancel: true,
        next: true,
      },
      scrollToTop: false,
      collapsible: false,
      key: 'innerPage1',
      type: 'panel',
      label: 'Page 1',
      components: [
        {
          label: 'Dynamic Wizard',
          tableView: false,
          rowDrafts: false,
          key: 'dynamicWizard',
          type: 'dynamicWizard',
          input: true,
          components: [
            {
              label: 'Checkbox',
              tableView: false,
              key: 'checkbox',
              type: 'checkbox',
              input: true,
            },
          ],
        },
      ],
      input: false,
      tableView: false,
    },
  ],
  revisions: '',
  _vid: 0,
  title: 'Simple DW Child',
  display: 'wizard',
  access: [
    {
      roles: [],
      type: 'create_own',
    },
    {
      roles: [],
      type: 'create_all',
    },
    {
      roles: [],
      type: 'read_own',
    },
    {
      roles: [
        '6038c83637595d104cfc3594',
        '6038c83637595d104cfc3595',
        '6038c83637595d104cfc3596',
      ],
      type: 'read_all',
    },
    {
      roles: [],
      type: 'update_own',
    },
    {
      roles: [],
      type: 'update_all',
    },
    {
      roles: [],
      type: 'delete_own',
    },
    {
      roles: [],
      type: 'delete_all',
    },
    {
      roles: [],
      type: 'team_read',
    },
    {
      roles: [],
      type: 'team_write',
    },
    {
      roles: [],
      type: 'team_admin',
    },
  ],
  submissionAccess: [
    {
      roles: [],
      type: 'create_own',
    },
    {
      roles: [],
      type: 'create_all',
    },
    {
      roles: [],
      type: 'read_own',
    },
    {
      roles: [],
      type: 'read_all',
    },
    {
      roles: [],
      type: 'update_own',
    },
    {
      roles: [],
      type: 'update_all',
    },
    {
      roles: [],
      type: 'delete_own',
    },
    {
      roles: [],
      type: 'delete_all',
    },
    {
      roles: [],
      type: 'team_read',
    },
    {
      roles: [],
      type: 'team_write',
    },
    {
      roles: [],
      type: 'team_admin',
    },
  ],
  controller: '',
  properties: {},
  settings: {},
  name: 'simpleDwChild',
  path: 'simpledwchild',
  project: '6038c83637595d104cfc3593',
  created: '2021-04-22T08:47:55.458Z',
  modified: '2021-04-22T16:11:56.581Z',
  machineName: 'dqroghuntybetsh:dwChild',
};
