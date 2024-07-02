module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@uploads': './Backend/uploads', // Adjust the path accordingly
        },
      },
    ],
  ],
};
