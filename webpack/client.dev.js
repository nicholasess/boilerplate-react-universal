const path = require('path')
const baseConfig = require('./common');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const client = {
	entry: path.join(__dirname, '..', './src/client/index.js'),
	output: {
	    filename: 'client.js',
	    path: path.join(__dirname, '..', 'build'),
	},
   	module: {
        loaders: [
            {
            test: /\.js$/,
            loader: 'babel',
		}]
    }
}

module.exports = merge(baseConfig, client);