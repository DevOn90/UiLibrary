import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    //'../**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
    '../../cards/**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
    '../../buttons/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'
  ],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs
