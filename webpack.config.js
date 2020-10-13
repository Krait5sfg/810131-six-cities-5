const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    open: false,
    port: 1337,
    historyApiFallback: true // для корректной работы маршрутизации пакета react-router-dom
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'] // лоадеры для работы с css
      },
      {
        test: /\.(png|jpg|svg)$/, // указываем с какими расширениями работать
        use: ['file-loader'] // лоадер для работы с различными файлами
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'] //при импорте позволяет не писать расширения файлов
  },
  devtool: 'source-map',
};
