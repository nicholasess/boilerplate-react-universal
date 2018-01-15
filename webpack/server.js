const path = require('path')
const baseConfig = require('./common');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals')
const server = {
  target: 'node',
   externals: [nodeExternals({
    modulesFromFile: true
  })],
  entry: path.join(__dirname, '..', './src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '..', 'build'),
  }
}

module.exports = merge(baseConfig, server);