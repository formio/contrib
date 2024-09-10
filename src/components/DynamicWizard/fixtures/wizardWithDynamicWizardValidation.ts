export default {
  _id: '6051f70025d64e0afc2be04f',
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
          label: 'Dynamic Wizard',
          tableView: false,
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
              validate: {
                required: true,
              },
              key: 'textField',
              type: 'textfield',
              input: true,
            },
            {
              label: 'Text Field 1',
              tableView: true,
              key: 'textField1',
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
  title: 'DW-init',
  display: 'wizard',
  access: [
    {
      roles: [
        '6038c83637595d104cfc3594',
        '6038c83637595d104cfc3595',
        '6038c83637595d104cfc3596',
      ],
      type: 'read_all',
    },
  ],
  submissionAccess: [],
  controller: '',
  properties: {},
  settings: {},
  name: 'dwInit',
  path: 'dwinit',
  project: '6038c83637595d104cfc3593',
  created: '2021-03-17T12:33:04.386Z',
  modified: '2021-03-17T12:33:04.394Z',
  machineName: 'dqroghuntybetsh:dwInit',
};
