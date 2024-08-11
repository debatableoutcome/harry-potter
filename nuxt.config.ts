const { mergeConfig } = require('vite');
const { loadNuxt } = require('nuxt');

module.exports = {
  async viteFinal(config) {
    const nuxt = await loadNuxt();
    return mergeConfig(config, nuxt.options.vite);
  },
  stories: ['../components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
};
