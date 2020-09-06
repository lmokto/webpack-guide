const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// npx webpack --env.NODE_ENV=local --env.production --progress

module.exports = env => {
  // Use env.<YOUR VARIABLE> here:
  console.log('NODE_ENV: ', env.NODE_ENV); // 'local'
  console.log('Production: ', env.production); // true

  return {
    entry: {
      app: './src/index.js',
      print: './src/print.js',
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
    },
    optimization: {
      moduleIds: 'hashed',
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },    
    },  
    // optimization: {
    //   splitChunks: {
    //     chunks: 'all',
    //   },
    // },  
    plugins: [
      new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
      new HtmlWebpackPlugin({
        title: 'Caching',
      }),
    ],
    output: {
      // filename: '[name].bundle.js',
      // chunkFilename: '[name].bundle.js',
      // publicPath: '/',
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist')
    },
  }

};
