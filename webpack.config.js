const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const port = 3333;

module.exports = ({ WEBPACK_SERVE }) => {
  const isEnvDevelopment = Boolean(WEBPACK_SERVE);

  return {
    entry: isEnvDevelopment ? './src/index' : { lib: './src/lib/index', widget: './src/widget/index' },
    mode: 'development',
    target: 'web',
    devServer: {
      static: {
        directory: path.join(__dirname, 'lib'),
      },
      port,
    },
    devtool: 'source-map',
    output: {
      clean: true,
      publicPath: 'auto',
      path: path.resolve(__dirname, 'lib', 'bundle'),
      filename: '[name].js',
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
