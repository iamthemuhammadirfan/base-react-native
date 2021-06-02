module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./app"],
        alias: {
          components: "./app/components",
          configs: "./app/configs",
          assets: "./app/assets",
          screens: "./app/screens",
          services: "./app/services",
          hooks: "./app/hooks",
          api: "./app/api",
          routes: "./app/routes",
          utils: "./app/utils",
        },
      },
    ],
  ],
};
