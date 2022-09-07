const { getDefaultConfig } = require("@expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);
const defaultAssetExts = require('metro-config/src/defaults/defaults')
  .assetExts;

module.exports = {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
    },
    //added this
    resolver: {
      sourceExts: ['jsx', 'js', 'ts', 'tsx', 'cjs'],
      assetExts: [...defaultAssetExts, 'ptl'],
    },
  };