const path = require('path')
const baseConfig = require('./common');
const merge = require('webpack-merge');

const client = {
	devtool: 'source-map',
	entry: path.join(__dirname, '..', './src/client/index.js'),
	output: {
    filename: 'client.js',
    path: path.join(__dirname, '..', 'build'),
  }
}

module.exports = merge(baseConfig, client);