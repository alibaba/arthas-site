require('@babel/register')();
const gulp = require('gulp');
const gutil = require('gulp-util');
const webpack = require('webpack');
const opn = require('opn');
const WebpackDevServer = require('webpack-dev-server');
const siteConfig = require('./site_config/site').default;
const webpackConfig = require('./webpack.config.js');

const port = siteConfig.port || 8080;
function webpack_server(cb) {
  // body omitted
  // modify some webpack config options
  const myConfig = Object.create(webpackConfig);
  myConfig.plugins.push(new webpack.SourceMapDevToolPlugin({}));
  // Start a webpack-dev-server
  new WebpackDevServer(webpack(myConfig), {
    publicPath: `http://127.0.0.1:${port}/build/`,
    stats: {
      colors: true,
    },
  }).listen(port, '127.0.0.1', (err) => {
    if (err) throw new gutil.PluginError('webpack-dev-server', err);
    opn(`http://127.0.0.1:${port}/`);
  });
  cb();
}

function webpack_build(callback) {
  // modify some webpack config options
  const myConfig = Object.create(webpackConfig);
  myConfig.output.publicPath = `${siteConfig.rootPath}/build/`;
  myConfig.plugins = myConfig.plugins.concat(
    new webpack.DefinePlugin({
      'process.env': {
        // This has effect on the react lib size
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin()
  );

  // run webpack
  webpack(myConfig, (err, stats) => {
    if (err) throw new gutil.PluginError('webpack:build', err);
    gutil.log(
      '[webpack:build]',
      stats.toString({
        colors: true,
      })
    );
    callback();
  });
}
const webpackserver = gulp.series(webpack_server);


// The development server (the recommended option for development)
gulp.task('default', webpackserver);

// Production build
gulp.task('build', gulp.series(webpack_build));

