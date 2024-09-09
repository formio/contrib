export default {
  _id: '60479f9f2c328733ce0965db',
  type: 'form',
  tags: [],
  owner: '5f8c868776930a501b799009',
  components: [
    {
      title: 'Page 1',
      label: 'Page 1',
      type: 'panel',
      key: 'page1',
      components: [
        {
          label: 'Dynamic Wizard',
          tableView: true,
          templates: {
            header:
              '<div class="row">\n    <div class="col-sm-2">\n      Users\n    </div>\n  </div>',
            row: '<div class="list-group-item">\n    <div class="list-group-subheader">\n      <div class="row">\n        <div class="col-sm-2">\n          User {{ rowIndex + 1 }}\n        </div>\n        {% if (!ctx.self.options.readOnly) { %}\n        <div class="col-sm-2">\n          <div class="btn-group pull-right">\n            <button class="btn btn-default btn-light btn-sm editCard"><i class="{{ ctx.iconClass(\'edit\') }}"></i></button>\n            <button class="btn btn-danger btn-sm removeCard"><i class="{{ ctx.iconClass(\'trash\') }}"></i></button>\n          </div>\n        </div>\n        {% } %}\n      </div>\n    </div>\n    {% ctx.util.eachComponent(ctx.components, function(component) { %}\n    {% if (!component.hasOwnProperty(\'tableView\') || component.tableView) { %}\n    <div class="row">\n      <div class="col-sm-2">\n        {{ component.key }}\n      </div>\n    </div>\n    <div class="row">\n      <div class="col-sm-2">\n        {{ ctx.getView(component, ctx.row[component.key]) }}\n      </div>\n    </div>\n    {% } %}\n    {% }) %}\n  </div>',
          },
          rowDrafts: false,
          key: 'dynamicWizard',
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
  title: 'Example DW',
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
        '5f8d5c8c3b869f1794056e8b',
        '5f8d5c8c3b869f1794056e8c',
        '5f8d5c8c3b869f1794056e8d',
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
  name: 'exampleDw',
  path: 'exampledw',
  project: '5f8d5c8c3b869f1794056e8a',
  created: '2021-03-09T16:17:35.996Z',
  modified: '2021-03-11T17:03:00.017Z',
  machineName: 'ddafsaalcenlmfj:exampleDw',
};
