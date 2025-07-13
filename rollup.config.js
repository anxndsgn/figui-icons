import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const packageJson = require('./package.json');

const createConfig = (input, outputName) => ({
  input,
  output: [
    {
      file: `dist/${outputName}.js`,
      format: 'cjs',
      sourcemap: true,
      name: 'figui-icons',
    },
    {
      file: `dist/${outputName}.esm.js`,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: './dist',
      exclude: ['**/*.test.tsx', '**/*.test.ts', '**/*.stories.tsx'],
    }),
  ],
});

const createDtsConfig = (input, outputName) => ({
  input: `dist/${input}`,
  output: [{ file: `dist/${outputName}`, format: 'esm' }],
  plugins: [dts()],
  external: [/\.(css|less|scss|sass)$/],
});

export default [
  // Main build configs
  createConfig('src/index.ts', 'index'),
  createConfig('src/16.ts', '16'),
  createConfig('src/24.ts', '24'),

  // Type definition configs
  createDtsConfig('index.d.ts', 'index.d.ts'),
  createDtsConfig('16.d.ts', '16.d.ts'),
  createDtsConfig('24.d.ts', '24.d.ts'),
];
