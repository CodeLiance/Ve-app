const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// Backend y landing tienen su propio repo; si están clonados aquí, Metro no debe recorrerlos.
config.resolver.blockList = [/\/USCback\/.*/, /\/USClanding\/.*/];

module.exports = withNativeWind(config, { input: './src/global.css' });
