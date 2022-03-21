const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');


const developmentConfigs = {
  mode: 'development',
  devtool: 'inline-source-map',  // tell the browser where a file came from
  devServer: {
    // contentBase: path.resolve(__dirname, 'dist'),  // depricated, don't use contentBase
    // watchContentBase: true,  // don't use watchContentBase
    static: path.resolve(__dirname, 'dist'),  // new way
    port: 5001,  // default 8080
    open: false,  // opens the app in a new tab
    hot: true,  // adds HMR
    watchFiles: [path.resolve(__dirname, 'src')]
  },
};


module.exports = merge(common, developmentConfigs);
