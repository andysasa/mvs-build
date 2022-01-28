const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/i,
          include: path.resolve(__dirname, 'src'),
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.css$/i,
          include: path.resolve(__dirname, 'src'),
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.(png|jpe?g|webp|git|svg|)$/i,
          use: [
            {
              loader: 'img-optimize-loader',
              options: {
                name: '[path][name].[ext]',
                compress: {
                  webp: true,
                },
              },
            },
          ],
        },
      ],
    },
    devServer: {
      static: './dist'
    },
  };