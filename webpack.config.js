module.exports = {
  mode: 'production',
  entry: './src/assets/js/app.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.min.js',
  }
};
