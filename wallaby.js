module.exports = wallaby => {
  // Internal flags used by @vue/babel-preset-app to make
  // bundles work in Jest or a Node.js environment.
  process.env.VUE_CLI_BABEL_TARGET_NODE = true;
  process.env.VUE_CLI_BABEL_TRANSPILE_MODULES = true;

  return {
    files: [
      "tsconfig.json",
      "jest.config.js",
      "src/**/*",
      { pattern: "src/**/*.test.*", ignore: true }
    ],

    tests: [{ pattern: "src/**/*.test.*", load: true }],

    env: {
      type: "node",
      runner: "node"
    },

    preprocessors: {
      "**/*.js?(x)": file =>
        require("@babel/core").transform(file.content, {
          sourceMap: true,
          compact: false,
          filename: file.path,
          plugins: ["babel-plugin-jest-hoist"]
        }),
      "**/*.vue": file => require("vue-jest").process(file.content, file.path)
    },

    setup(wallaby) {
      const jestConfig = require("./jest.config.js");
      delete jestConfig.transform["^.+\\.vue$"];
      wallaby.testFramework.configure(jestConfig);
    },

    testFramework: "jest",

    debug: false
  };
};
