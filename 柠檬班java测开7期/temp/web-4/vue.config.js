const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //文件包在时取消eslint验证，保证components中的单个单词组件不报错
  lintOnSave:false
})
