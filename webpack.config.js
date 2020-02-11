
const path = require('path');

const resolve = (...params) => path.resolve(__dirname, ...params);

const babelPresets = [
  ['@babel/env'],
];

module.exports = {
  entry: {
    script: resolve('src', 'index.js'),
  },
  output: {
    filename: '[name].js',
    path: resolve('js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: babelPresets,
        },
      },
    ],
  },
};
