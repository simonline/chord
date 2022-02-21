module.exports = {
  outputDir: 'docs',
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
