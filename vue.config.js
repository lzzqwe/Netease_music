const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const { HashedModuleIdsPlugin } = require('webpack');
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const isProduction = process.env.NODE_ENV === 'production';
const autoprefixer = require('autoprefixer');
// const pxtorem = require('postcss-pxtorem');
const pxtoviewport = require('postcss-px-to-viewport');

function resolve(dir) {
  return path.join(__dirname, dir)
}
// externals
// const externals = {
//   vue: 'Vue',
//   'vue-router': 'VueRouter',
//   vuex: 'Vuex',
//   vant: 'vant',
//   axios: 'axios'
// }
// CDN外链，会插入到index.html中
// const cdn = {
//   // 开发环境
//   dev: {
//     css: [],
//     js: []
//   },
//   // 生产环境
//   build: {
//     css: ['https://cdn.jsdelivr.net/npm/vant@2.12/lib/index.css'],
//     js: [
//       'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js',
//       'https://cdn.jsdelivr.net/npm/vue-router@3.1.5/dist/vue-router.min.js',
//       'https://cdn.jsdelivr.net/npm/axios@0.19.2/dist/axios.min.js',
//       'https://cdn.jsdelivr.net/npm/vuex@3.1.2/dist/vuex.min.js',
//       'https://cdn.jsdelivr.net/npm/vant@2.12/lib/vant.min.js',
//       'https://cdn.bootcdn.net/ajax/libs/better-scroll/2.2.1/better-scroll.min.js'
//     ]
//   }
// }
module.exports = {
  productionSourceMap: false,
  publicPath: './',
  devServer:{
    host:"127.0.0.1"
  },

  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('components', resolve('src/components'))
      .set('api', resolve('src/api'))
      .set('common', resolve('src/common'))
      .set('base', resolve('src/base'))
    // 压缩图片
    if (isProduction) {
      config.module
        .rule('images')
        .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
        .use('image-webpack-loader')
        .loader('image-webpack-loader')
        .options({ bypassOnDebug: true })

      // webpack 会默认给commonChunk打进chunk-vendors，所以需要对webpack的配置进行delete
      config.optimization.delete('splitChunks')
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
    // config.plugin('html').tap(args => {
    //   if (process.env.NODE_ENV === 'production') {
    //     args[0].cdn = cdn.build
    //   }
    //   if (process.env.NODE_ENV === 'development') {
    //     args[0].cdn = cdn.dev
    //   }
    //   return args
    // })
  },
  configureWebpack: config => {
    const plugins = [];

    if (isProduction) {
      plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            output: {
              comments: false, // 去掉注释
            },
            warnings: false,
            compress: {
              drop_console: true,
              drop_debugger: false,
              pure_funcs: ['console.log']//移除console
            }
          }
        })
      )
      // 服务器也要相应开启gzip
      plugins.push(
        new CompressionWebpackPlugin({
          algorithm: 'gzip',
          test: /\.(js|css)$/,// 匹配文件名
          threshold: 10000, // 对超过10k的数据压缩
          deleteOriginalAssets: false, // 不删除源文件
          minRatio: 0.8 // 压缩比
        })
      )

      // 用于根据模块的相对路径生成 hash 作为模块 id, 一般用于生产环境
      plugins.push(
        new HashedModuleIdsPlugin()
      )

      // 开启分离js
      config.optimization = {
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: Infinity,
          minSize: 1000 * 60,
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name(module) {
                // 排除node_modules 然后吧 @ 替换为空 ,考虑到服务器的兼容
                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                return `npm.${packageName.replace('@', '')}`
              }
            }
          }
        }
      };

      // 取消webpack警告的性能提示
      config.performance = {
        hints: 'warning',
        //入口起点的最大体积
        maxEntrypointSize: 1000 * 500,
        //生成文件的最大体积
        maxAssetSize: 1000 * 1000,
        //只给出 js 文件的性能提示
        assetFilter: function (assetFilename) {
          return assetFilename.endsWith('.js');
        }
      }

      // 打包时npm包转CDN
      // config.externals = externals;
    }

    return { plugins }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          // pxtorem({
          //   rootValue: 54,
          //   propList: ['*']
          // })
          pxtoviewport({
            viewportWidth: 375
          })
        ]
      },
      less: {
        modifyVars: {
          // 直接覆盖变量
          'dialog-width': '300px',
          'dialog-border-radius': '10px',
          'dialog-message-font-size': '12px',
          'dialog-has-title-message-text-color': 'rgb(153,153,153)',
          'dialog-font-size': '12px',
          'dialog-message-padding': '30px',
          'tabs-bottom-bar-width': '50px',
          'tabs-bottom-bar-height': '9px',
          'tabs-line-height': '86px',
          'tabs-nav-background-color': 'rgb(245,245,245)',
          'tab-font-size': '20px',
          'search-padding': '0 15px',
          'search-background-color': 'rgb(245,245,245)',
          'search-content-background-color': 'rgb(238,238,238)',
          'search-input-height': '30px',
          'search-action-font-size': '12px'
        }
      }
    }
  }

}
