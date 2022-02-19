module.exports = {
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
