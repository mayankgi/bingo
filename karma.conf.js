var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: [
      {
        pattern: 'app/tests/setup.jsx',
        included: true
      },
      'app/tests/**/*.test.jsx',
      'app/components/**/*.test.jsx'
    ],
    preprocessors: {
      'app/tests/setup.jsx': ['webpack', 'sourcemap'],
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap'],
      'app/components/**/*.test.jsx': ['webpack', 'sourcemap'],
    },
    reporters: ['mocha'],
    client: {
      mocha: {
        timeout: '5000'
      }
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
};
