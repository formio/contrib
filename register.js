const _ = require('lodash');
const pirates = require('pirates');

/**
 * Overrides the tsconfig used for the app.
 * In the test environment we need some tweaks.
 */

const tsNode = require('ts-node');

tsNode.register({
   files: true,
   transpileOnly: true,
   project: './tsconfig.spec.json'
});

pirates.addHook((code) => {
  return 'export default ' + _.template(code, {
    evaluate: /\{%([\s\S]+?)%\}/g,
    interpolate: /\{\{([\s\S]+?)\}\}/g,
    escape: /\{\{\{([\s\S]+?)\}\}\}/g,
    variable: 'ctx'
  });
}, { exts: ['.ejs'] });
