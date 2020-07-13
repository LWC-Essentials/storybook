module.exports = {
    stories: ['../stories/**/*.stories.@(js|mdx|md)'],
  logLevel: 'debug',
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-backgrounds',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport',
  ],
};
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
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport',
  ],

  // Library references
  // https://medium.com/storybookjs/storybook-composition-af0da9084fba
  // The library features an entry in its package.json pointing to the static site, so
  // we don't need an explicit entry here.
  // refs: {
  //   "lwc-library": { 
  //     title: "LWC Library", 
  //     url: "https://lwc-essentials.github.io/storybook"
  //   }
  // },

  // Custom webpack configm, if necessary
  // https://storybook.js.org/docs/configurations/custom-webpack-config/#webpack-customisation-modes/
  webpackFinal: (config) => {
    return config
  }
};
