// const defaultSettings = require('./src/settings.js')
// const path = require('path')
// function resolve(dir) {
//   return path.join(__dirname, dir)
// }
// const name = defaultSettings.title // 网址标题
const port = 8081 // 端口配置
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,

  transpileDependencies: true,
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
  devServer: {
    port: port,
    open: false,
    proxy: {
      '/api': {
        target: 'http://localhost:8001',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: {
          '^/api': 'api'
        }
      },
    }
  },
}
