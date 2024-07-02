const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
var path = require('path');
/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    assetExts: [
      'obj',
      'mtl',
      'mp3',
      'JPG',
      'vrx',
      'hdr',
      'gltf',
      'glb',
      'bin',
      'arobject',
      'gif',
      'png',
      'jpg',
      'OBJ',
    ],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
