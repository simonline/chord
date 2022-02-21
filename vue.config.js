module.exports = {
  outputDir: 'docs',
  publicPath: '',
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.xlsx$/,
          loaders: ['arraybuffer-loader'],
        },
      ]
    }
  }
}
