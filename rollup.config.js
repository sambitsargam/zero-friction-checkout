import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  output: [
    { file: 'dist/index.esm.js', format: 'esm' },
    { file: 'dist/index.cjs.js', format: 'cjs', exports: 'named' }
  ],
  external: ['react', 'react-dom', '@startale/aa-sdk', '@privy-io/react-auth', 'viem'],
  plugins: [typescript({ useTsconfigDeclarationDir: true })]
};
