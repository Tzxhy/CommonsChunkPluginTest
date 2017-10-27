var webpack = require('webpack');
var path = require('path')


module.exports = {
  // entry: {
  // 	main1: './main1.js',
  // 	main2: './main2.js'
  // },
  entry: {
  	main1: './main1.js',
  	main2: './main2.js',
    vendor: ['jquery']
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, './dist')
  },
  plugins: [
  	// new webpack.BannerPlugin(`built on ${new Date().toLocaleString()}`),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor1',
      minChunks: Infinity,
      filename: 'threeparty.js'
    })
  ]
};
