const path = require('path')
const defaultSettings = require('./src/settings.js')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = defaultSettings.title // 网址标题
const port = 8013 // 端口配置

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  // hash 模式下可使用
  publicPath: '/',
  // publicPath: process.env.NODE_ENV === 'development' ? '/' : './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: port,
    proxy: {
      '/api': {
        changeOrigin: true,
        ws: true,
        target: process.env.VUE_APP_BASE_API,
        pathRewrite: {
          '^/api': 'api'
        }
      },
    }
  },
  pluginOptions: {
    i18n: {
      locale: undefined,
      fallbackLocale: undefined,
      localeDir: undefined,
      enableLegacy: undefined,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true
    },
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = name
        return args
      })
  }
}
