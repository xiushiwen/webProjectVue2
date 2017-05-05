var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
// var ExtractTextPlugin = require('extract-text-webpack-plugin')
// var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
var glob = require('glob');
var fs = require('fs');

// - development: 本地测试，接口：测试接口，打包方式：dev 打包
// - testing：线上测试，接口：测试接口，打包方式：production 打包
// - production：正式发布，接口：线上地址，打包方式：production 打包

var env = process.env.PREPUB ? require('../config/test.env'): config.build.env;

var handlePath = function (assetsRoot, item, file) {
    file = path.resolve(path.dirname(path.join(assetsRoot, item)), file);
    return file.replace(assetsRoot, '');
};
var htmlFiles = glob.sync('./src/pages/**/*.html');
var html = glob.sync('./src/pages/**/*.html').map(function (item) {
  return new HtmlWebpackPlugin({
    data: {
      build: true
    },
    filename: item.substr(6),
    template: 'ejs-compiled-loader!' + item,
    inject: false,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      preserveLineBreaks: true,
      collapseInlineTagWhitespace: true,
      collapseBooleanAttributes: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      caseSensitive: true,
      minifyJS: true,
      minifyCSS: true,
      quoteCharacter: '"'
    },
    chunksSortMode: 'dependency'
  });
});
var configFilePath = process.env.PREPUB ? './src/common/config.js' : './src/common/config.prod.js';

Object.keys(baseWebpackConfig.entry).forEach(function (name) {
    baseWebpackConfig.entry[name] = [configFilePath].concat(baseWebpackConfig.entry[name]);
});

var webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap
      // extract: true
    })
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('[id].[chunkhash].js')
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    }),
    // extract css into its own file
    // new ExtractTextPlugin({
    //   filename: utils.assetsPath('[name].[contenthash].css')
    // }),

    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    // new OptimizeCSSPlugin(),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    // new HtmlWebpackPlugin({
    //   filename: config.build.index,
    //   template: 'index.html',
    //   inject: true,
    //   minify: {
    //     removeComments: true,
    //     collapseWhitespace: true,
    //     removeAttributeQuotes: true
    //     // more options:
    //     // https://github.com/kangax/html-minifier#options-quick-reference
    //   },
    //   // necessary to consistently work with multiple chunks via CommonsChunkPlugin
    //   chunksSortMode: 'dependency'
    // }),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.(js|vue|css|scss)$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //     name: 'vendor',
    //     minChunks: function (module, count) {
    //         return (
    //             module.resource &&
    //             /\.(js|vue|css|scss)$/.test(module.resource) && count > 2
    //         );
    //     }
    // }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),
    function () {
      this.plugin('done', function (stats) {
          var replaceInFile = function (filePath, toReplace, replacement) {
              var str = fs.readFileSync(filePath, 'utf8');
              var out = str.replace(toReplace, replacement);
              fs.writeFileSync(filePath, out);
          };

          var hashes = {};
          Object.keys(stats.compilation.assets).filter(function (value) {
              return /\.(css|js)$/.test(value)
          }).map(function (value) {
              hashes[value.split('.').slice(0, -2).toString()] = value.split('.').splice(-2, 1).toString();
          });

          htmlFiles.map(function (item) {
              replaceInFile(path.join(config.build.assetsRoot, item.substr(6)),
                  /(src|href|x-src)=\"([\/\w\.]+\.(js|css))\"/g,
                  function ($0, $1, $2) {
                      if ($2.indexOf('//') === 0) {
                        return $0;
                      } else {
                        var file = $2.split('.');
                        var prefix = $1;
                        var hash = hashes[handlePath(config.build.assetsRoot, item.substr(6), $2).slice(1, -3)];
                        if (hash) {
                          file.splice(-1, 0, hash);
                        }
                        file = file.join('.');
                        return prefix + '="' + handlePath(config.build.assetsRoot, item.substr(6), file) + '"';
                        //return prefix + '="' + handlePathPrefix + handlePath(config.build.assetsRoot, item.substr(6), file) + '"';
                      }
                  }
              );
          });
      });
  }
  ].concat(html)
})

if (config.build.productionGzip) {
  var CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (config.build.bundleAnalyzerReport) {
  var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
