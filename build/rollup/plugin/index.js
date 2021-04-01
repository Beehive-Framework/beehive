import {configVisualizerPlugin} from './visualizer.js';

export function createRollupPlugins (viteEnv, mode) {
  const rollupPlugins = [];

  if (mode === "development") {
    rollupPlugins.push(configVisualizerPlugin());
  }

  return rollupPlugins;
}
