const config = require('./webpack.config.js');
config.mode = 'production';
config.output.filename = 'formio-contrib.min.js';
module.exports = config;
