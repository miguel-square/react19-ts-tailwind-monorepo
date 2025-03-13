import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  output: {
  },
  source: {
    entry: {
      index: './src/index.ts',
    },
  },
});