export default {
  _id: '60b5ff4593d8df225cfd4316',
  type: 'form',
  tags: [],
  owner: '6038bed737595d104cfc358a',
  components: [
    {
      title: 'Page 1',
      label: 'Page 1',
      type: 'panel',
      key: 'page1',
      components: [
        {
          label: 'Text Field',
          tableView: true,
          validate: {
            required: true,
          },
          key: 'textField',
          type: 'textfield',
          input: true,
        },
      ],
      input: false,
      tableView: false,
    },
    {
      title: 'Page 2',
      label: 'Page 2',
      type: 'panel',
      key: 'page2',
      components: [
        {
          label: 'Dynamic Wizard',
          tableView: false,
          validate: {
            required: true,
          },
          rowDrafts: false,
          key: 'dynamicWizard',
          type: 'dynamicWizard',
          input: true,
          components: [
            {
              label: 'Number',
              mask: false,
              spellcheck: true,
              tableView: false,
              delimiter: false,
              requireDecimal: false,
              inputFormat: 'plain',
              key: 'number',
              type: 'number',
              input: true,
            },
          ],
        },
      ],
      input: false,
      tableView: false,
    },
    {
      title: 'Page 3',
      label: 'Page 3',
      type: 'panel',
      key: 'page3',
      components: [
        {
          label: 'Text Area',
          autoExpand: false,
          tableView: true,
          validate: {
            required: true,
          },
          key: 'textArea',
          type: 'textarea',
          input: true,
        },
      ],
      input: false,
      tableView: false,
    },
  ],
  revisions: '',
  _vid: 0,
  title: 'DW test no component',
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
  name: 'dwTestNoComponent',
  path: 'dwtestnocomponent',
  project: '6038c83637595d104cfc3593',
  created: '2021-06-01T09:35:01.444Z',
  modified: '2021-06-01T09:36:11.563Z',
  machineName: 'dqroghuntybetsh:dwTestNoComponent',
};
