const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');


const productionConfigs = {
  mode: 'production',
  devtool: 'source-map',
}


module.exports = merge(common, productionConfigs);
