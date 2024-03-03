import path from 'path';

import type { StorybookConfig } from '@storybook/nextjs';

const storybookConfig: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-mock',
    '@storybook/addon-mdx-gfm',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  core: {
    disableTelemetry: true,
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation',
  },
  staticDirs: ['../public'],
  webpackFinal: (config) => ({
    ...config,
    resolve: {
      ...(config.resolve || {}),
      alias: {
        ...(config.resolve?.alias || {}),
        '@': path.resolve(__dirname, '../src'),
      },
    },

  }),
};

export default storybookConfig;
