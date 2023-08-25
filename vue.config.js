const path = require('path');
module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': '/src',
        assets: '@/assets',
        components: '@/components',
        utils: '@/utils',
      },
    },
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'OwnVerse';
      return args;
    });
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/assets/css/variable.less')],
    },
  },
};
