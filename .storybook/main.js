const path = require('path');
import vue from '@vitejs/plugin-vue';

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: [
    '../components/**/*.mdx',
    '../components/**/*.stories.@(js|jsx|mjs|ts|tsx|vue)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');

    return mergeConfig(config, {
      plugins: [vue()],
      css: {
        postcss: null,
        preprocessorOptions: {
          scss: {
            additionalData: `@import "${path.resolve(__dirname, '../assets/scss/main.scss')}";`,
          },
        },
      },
    });
  },
};

export default config;
