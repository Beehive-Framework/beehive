import visualizer from 'rollup-plugin-visualizer';

export function configVisualizerPlugin () {
  const visualizerPlugin = visualizer({
    open: true,
    gzipSize: true
  })
  return visualizerPlugin;
}
