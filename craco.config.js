const path = require("path");
const { whenDev, when } = require("@craco/craco");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const bundleAnalyzer = when(
  process.env.REPORT === "true" && process.env.NODE_ENV === "production",
  () => [new BundleAnalyzerPlugin({ analyzerHost: "localhost" })],
  []
);

const apiMockAlias = whenDev(() => ({
  "../../github/githubAPI": path.resolve(__dirname, "./src/github/mockGithubAPI"),
}));

module.exports = {
  webpack: {
    alias: {
      react: "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",
      ...apiMockAlias,
    },
    plugins: [...bundleAnalyzer],
  },
  devServer: {
    open: false,
  },
  jest: {
    configure: {
      moduleNameMapper: {
        "^react$": "preact/compat",
        "^react-dom/test-utils$": "preact/test-utils",
        "^react-dom$": "preact/compat",
      },
    },
  },
};
