const path = require('path');

module.exports = {
  entry: path.join(path.resolve(__dirname, 'lib'), 'index.js'),
  output: {
    library: 'FormioContrib',
    libraryTarget: 'umd',
    libraryExport: 'default',
    path: path.resolve(__dirname, 'dist'),
    filename: 'formio-contrib.js',
  },
  mode: 'development',
  performance: { hints: false },
  externals: {
    formiojs: 'Formio'
  }
};
