// main.js
// https://storybook.js.org/docs/configurations/overview/#mainjs-is-a--preset

module.exports = {
  // Glob pattern
  // https://www.npmjs.com/package/glob
  stories: ['../stories/**/*.stories.@(js|mdx|md)'],

  logLevel: 'debug',

  // List of add-ons
  //https://storybook.js.org/docs/addons/introduction/
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-backgrounds',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport',
  ],

  // Custom webpack config, if necessary
  // https://storybook.js.org/docs/configurations/custom-webpack-config/#webpack-customisation-modes/
  webpackFinal: (config) => {
    return config
  }
};
