const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production';

const plugins = [];
if (!isProd) {
  plugins.push(new HtmlWebpackPlugin({
    template: './example/index.html'
  }));
}

module.exports = {
  entry: isProd ? './src/index.ts' : './example/index.ts',
  devtool: isProd ? false : 'inline-source-map',
  // build 之后尽量保留原始信息
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  // webpack5 runtime 里面有 arrow funciton
  target: [
    'browserslist:last 2 version, not dead, IE 11',
    'es5'
  ],
  output: {
    publicPath: 'auto',
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  plugins
};
