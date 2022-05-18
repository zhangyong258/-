module.exports = {
  configureWebpack:{
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': '/src',
        assets: '@/assets',
        components: '@/components',
        utils: '@/utils'
      }
    }
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title= 'Mr.Zhang的博客'
        return args
      })
  },
}