import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  dev: {
    startUrl: true,
  },
  html: {
    title: 'My React App',
  },
  source: {
    entry: {
      index: './src/index.tsx',
    },
  },
});