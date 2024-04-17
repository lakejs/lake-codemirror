import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

function getCodeMirrorBuildConfig(type) {
  if (type === 'iife') {
    return {
      input: './src/codemirror.ts',
      output: {
        file: './dist/codemirror.min.js',
        format: 'iife',
        name: 'CodeMirror',
        sourcemap: false,
        plugins: [terser()],
      },
      plugins: [
        nodeResolve(),
        typescript(),
      ],
    };
  }
  return {
    input: './src/codemirror.ts',
    output: {
      file: './lib/codemirror.js',
      format: 'es',
      sourcemap: false,
    },
    plugins: [
      typescript(),
    ],
  };
}

export default () => [
  getCodeMirrorBuildConfig('iife'),
  getCodeMirrorBuildConfig('es'),
];
