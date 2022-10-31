import vue from 'rollup-plugin-vue'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'
import externals from 'rollup-plugin-node-externals'

export default [{
  input: 'src/index.js',
  output: {
    dir: 'dist/',
    format: 'esm'
  },
  plugins: [
    vue({ preprocessStyles: true }),
    externals(),
    terser(),
    postcss(),
    babel({
      exclude: ['node_modules/**']
    })
  ]
}]
