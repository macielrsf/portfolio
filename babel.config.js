module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': ['./src/components'],
          '@contexts': ['./src/contexts'],
          '@hooks': ['./src/hooks'],
          '@sections': ['./src/sections'],
          '@assets': ['./src/assets'],
          '@data': ['./src/data'],
          '@styles': ['./src/styles'],
          '@translations': ['./src/translations'],
          '@types': ['./src/types'],
          '@utils': ['./src/utils'],
        },
      },
    ],
  ],
}; 