module.exports = {
  presets: [
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
    '@babel/typescript',
    ['@babel/env', { modules: false }],
  ],
};
