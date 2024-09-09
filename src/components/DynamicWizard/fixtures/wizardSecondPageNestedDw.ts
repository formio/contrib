export default {
  _id: '60813cf2fc88e7048cbe5124',
  type: 'form',
  tags: [],
  owner: '6038bed737595d104cfc358a',
  components: [
    {
      title: 'Page 1',
      label: 'Page 1',
      type: 'panel',
      key: 'page1',
      input: false,
      tableView: false,
      components: [],
    },
    {
      title: 'Page 2',
      label: 'Page 2',
      type: 'panel',
      key: 'page2',
      components: [
        {
          label: 'Form',
          tableView: true,
          // "form": "6081383bfc88e7048cbe50ee",
          useOriginalRevision: false,
          key: 'wizardNested',
          type: 'form',
          input: true,
        },
      ],
      input: false,
      tableView: false,
    },
  ],
  revisions: '',
  _vid: 0,
  title: 'Wizard Second Page Nested DW',
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
  name: 'wizardSecondPageNestedDw',
  path: 'wizardsecondpagenesteddw',
  project: '6038c83637595d104cfc3593',
  created: '2021-04-22T09:08:02.903Z',
  modified: '2021-04-22T09:18:32.151Z',
  machineName: 'dqroghuntybetsh:00',
};
