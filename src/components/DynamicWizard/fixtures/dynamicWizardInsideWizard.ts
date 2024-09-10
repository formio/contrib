export default {
  type: 'form',
  owner: null,
  components: [
    {
      label: 'Wizard Form',
      tableView: true,
      display: 'wizard',
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
              label: 'Dynamic Wizard',
              tableView: true,
              templates: {
                header:
                  '<div class="row">\n    <div class="col-sm-2">\n      Users\n    </div>\n  </div>',
                row: '<div class="list-group-item">\n    <div class="list-group-subheader">\n      <div class="row">\n        <div class="col-sm-2">\n          User {{ rowIndex + 1 }}\n        </div>\n        {% if (!ctx.self.options.readOnly) { %}\n        <div class="col-sm-2">\n          <div class="btn-group pull-right">\n            <button class="btn btn-default btn-light btn-sm editCard"><i class="{{ ctx.iconClass(\'edit\') }}"></i></button>\n            <button class="btn btn-danger btn-sm removeCard"><i class="{{ ctx.iconClass(\'trash\') }}"></i></button>\n          </div>\n        </div>\n        {% } %}\n      </div>\n    </div>\n    {% ctx.util.eachComponent(ctx.components, function(component) { %}\n    {% if (!component.hasOwnProperty(\'tableView\') || component.tableView) { %}\n    <div class="row">\n      <div class="col-sm-2">\n        {{ component.key }}\n      </div>\n    </div>\n    <div class="row">\n      <div class="col-sm-2">\n        {{ ctx.getView(component, ctx.row[component.key]) }}\n      </div>\n    </div>\n    {% } %}\n    {% }) %}\n  </div>',
              },
              rowDrafts: false,
              key: 'nestedDynamicWizard',
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
        },
      ],
      key: 'wizard',
      type: 'form',
      input: true,
    },
    {
      type: 'button',
      label: 'Submit',
      key: 'submit',
      disableOnInvalid: true,
      input: true,
      tableView: false,
    },
  ],
};
