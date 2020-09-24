/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
const {getDefaultConfig} = require('metro-config');

module.exports = (async () => {
  const {
    resolver: {sourceExts, assetExts},
  } = await getDefaultConfig();
  return {
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
  };
})();
