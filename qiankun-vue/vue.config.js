const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave:false,
  transpileDependencies: true,
  devServer:{
    port:10001,
    headers:{
      'Access-Control-Allow-Origin':'*'
    }
  },
  configureWebpack:{
    output:{
      library:'vueApp',
      libraryTarget:'umd' // 把微应用打包成 umd 库格式
    }
  }
})
