import { Utils } from '@formio/js';

export default [
  {
    type: 'textarea',
    label: 'Header Template',
    key: 'templates.header',
    rows: 5,
    editor: 'ace',
    as: 'handlebars',
    input: true,
    placeholder: '/*** Lodash Template Code ***/',
    tooltip: 'This is the <a href=\'https://lodash.com/docs/4.17.5#template\'>Lodash Template</a> used to render the header of the Dynamic Wizard.',
    customConditional() {
      return !Utils.Evaluator.noeval;
    }
  },
  {
    type: 'textarea',
    label: 'Row Template',
    key: 'templates.row',
    rows: 5,
    editor: 'ace',
    as: 'handlebars',
    input: true,
    placeholder: '/*** Lodash Template Code ***/',
    description: 'Three available variables. "row" is an object of one row\'s data, "components"' +
      ' is the array of components in the grid and "state" is current row\'s state (can be "draft" or "saved").',
    tooltip: 'This is the <a href=\'https://lodash.com/docs/4.17.5#template\'>Lodash Template</a> used to render each row of the Dynamic Wizard.',
    customConditional() {
      return !Utils.Evaluator.noeval;
    }
  },
  {
    type: 'textarea',
    label: 'Footer Template',
    key: 'templates.footer',
    rows: 5,
    editor: 'ace',
    as: 'handlebars',
    input: true,
    placeholder: '/*** Lodash Template Code ***/',
    description: 'Two available variables. "value" is the array of row data and "components" is the array of components in the grid.',
    tooltip: 'This is the <a href=\'https://lodash.com/docs/4.17.5#template\'>Lodash Template</a> used to render the footer of the Dynamic Wizard.',
    customConditional() {
      return !Utils.Evaluator.noeval;
    }
  },
  {
    type: 'textfield',
    input: true,
    key: 'rowClass',
    label: 'Row CSS Class',
    placeholder: 'Row CSS Class',
    tooltip: 'CSS class to add to the edit row wrapper.'
  },
];
