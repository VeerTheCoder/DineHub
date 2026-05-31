const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

console.log("NativeWind Metro Loaded");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, {
  input: "./global.css",
});
