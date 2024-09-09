export default {
  _id: '60507bb26174062bd847d3aa',
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
          label: 'Text Field - not in DW',
          tableView: true,
          key: 'textFieldnotDW',
          type: 'textfield',
          input: true,
        },
        {
          label: 'Number',
          mask: false,
          spellcheck: true,
          tableView: false,
          delimiter: false,
          requireDecimal: false,
          inputFormat: 'plain',
          key: 'number',
          conditional: {
            show: true,
            when: 'textFieldnotDW',
            eq: 'up',
          },
          type: 'number',
          input: true,
        },
        {
          label: 'Dynamic Wizard',
          tableView: false,
          templates: {
            header:
              '<div class="row">\n    <div class="col-sm-2">\n      Users\n    </div>\n  </div>',
            row: '<div class="list-group-item">\n    <div class="list-group-subheader">\n      <div class="row">\n        <div class="col-sm-2">\n          User {{ rowIndex + 1 }}\n        </div>\n        {% if (!ctx.self.options.readOnly) { %}\n        <div class="col-sm-2">\n          <div class="btn-group pull-right">\n            <button class="btn btn-default btn-light btn-sm editCard"><i class="{{ ctx.iconClass(\'edit\') }}"></i></button>\n            <button class="btn btn-danger btn-sm removeCard"><i class="{{ ctx.iconClass(\'trash\') }}"></i></button>\n          </div>\n        </div>\n        {% } %}\n      </div>\n    </div>\n    {% ctx.util.eachComponent(ctx.components, function(component) { %}\n    {% if (!component.hasOwnProperty(\'tableView\') || component.tableView) { %}\n    <div class="row">\n      <div class="col-sm-2">\n        {{ component.key }}\n      </div>\n    </div>\n    <div class="row">\n      <div class="col-sm-2">\n        {{ ctx.getView(component, ctx.row[component.key]) }}\n      </div>\n    </div>\n    {% } %}\n    {% }) %}\n  </div>',
          },
          rowDrafts: false,
          key: 'dynamicWizard',
          conditional: {
            show: true,
            when: 'textFieldnotDW',
            eq: 'up',
          },
          type: 'dynamicWizard',
          input: true,
          components: [
            {
              label: 'Text Field',
              tableView: true,
              key: 'textField',
              type: 'textfield',
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
  title: 'DW-blocking-visibility-testx',
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
  name: 'dwBlockingVisibilityTestx',
  path: 'dwblockingvisibilitytestx',
  project: '6038c83637595d104cfc3593',
  created: '2021-03-16T09:34:42.912Z',
  modified: '2021-03-16T12:33:06.270Z',
  machineName: 'dqroghuntybetsh:dwBlockingVisibilityTest',
};
