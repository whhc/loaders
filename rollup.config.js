import { terser } from 'rollup-plugin-terser';
import vue from 'rollup-plugin-vue';
import PeerDepsExternalPlugin from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/main.js',
  output: [
    {
      file: 'dist/library.esm.mjs',
      format: 'esm',
    },
    {
      format: 'cjs',
      file: 'dist/library.js',
    },
  ],
  plugins: [
    PeerDepsExternalPlugin(),
    vue(),
    terser(),
    postcss({
      modules: true,
      external: false,
      minimize: true,
    }),
  ],
};
