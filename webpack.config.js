module.exports = {
    entry: {app: './main'},
    output: {
        path: './src/dist/js',
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.json']
    },
    module: {
        loaders: [
          {
              test: /\.ts$/,
              loader: 'ts'
          },
          {
              test: /\.json$/,
              loader: "json"
          }
        ]
    }
};