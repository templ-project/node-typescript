const typescript = require('@rollup/plugin-typescript');
const commonjs = require('@rollup/plugin-commonjs');
const resolve = require('@rollup/plugin-node-resolve');

module.exports = [
  // Browser build
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/browser/index.js',
      format: 'es', // or 'umd' if you need browser and Node.js support
    },
    plugins: [
      typescript(),
      resolve(), // resolves third-party modules in node_modules
      commonjs(), // converts CommonJS modules to ES6
    ],
  },
  // CommonJS build for Node.js
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/.rollup/cjs/index.js',
      format: 'cjs',
    },
    plugins: [typescript(), resolve(), commonjs()],
  },
  // ESM build
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/.rollup/esm/index.js',
      format: 'es',
    },
    plugins: [typescript(), resolve(), commonjs()],
  },
];
