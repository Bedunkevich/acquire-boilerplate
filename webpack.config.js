const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = ({ WEBPACK_SERVE }) => {
  const isEnvDevelopment = Boolean(WEBPACK_SERVE);

  return {
    entry: './src/index',
    mode: 'development',
    target: 'web',
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      port: 3001,
    },
    devtool: 'source-map',
    output: {
      clean: true,
      publicPath: 'auto',
      path: path.resolve(__dirname, 'lib', 'bundle'),
      filename: 'bundle.js',
      library: 'Acquire',
      libraryTarget: 'umd',
      umdNamedDefine: true,
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [...(isEnvDevelopment ? [new HtmlWebpackPlugin({ template: './public/index.html' })] : [])],
  };
};
