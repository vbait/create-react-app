# react-scripts

This package includes scripts and configuration used by [Create React App](https://github.com/facebook/create-react-app).<br>
Please refer to its documentation:

- [Getting Started](https://facebook.github.io/create-react-app/docs/getting-started) – How to create a new app.
- [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.

### Extra ENV Variables

- OPTIMIZATION_CHUNK: `string` - **'all'** by default
- USE_CONTENTHASH: `boolean` - **true** by default
- USE_CHUNK_CONTENTHASH: `boolean` - **true** by default
- USE_MANIFEST: `boolean` - **true** by default
- CHUNK_FILENAME: `string` - **'.chunk'** by default
- ASSETS_PATH: `string` - **'static/'** by default
- GENERATE_HTML: `boolean` - **true** by default
- OPTIMIZATION_RUNTIME_CHUNK: `boolean` - `runtime-${entrypoint.name}` by default if `true`

If it isn't enough then you can extend your webpack config with file
`<root>/webpack.extend.js`

How to use it:

```js
module.exports = (config, options) => {
  // change or create new config here
  return config;
};
```

Options:

```js
const options = {
  webpack,
  isEnvDevelopment,
  isEnvProduction,
  useTypeScript,
  useTailwind,
  hasJsxRuntime,
  assetsPath,
  appPackageJson,
  paths,
  // extra
  chunkFilename,
  webpackDevClientEntry,
  imageInlineSizeLimit,
  shouldInlineRuntimeChunk,
  optimizationChunk,
  shouldUseContentHash,
  shouldUseChunkContentHash,
  shouldUseManifest,
  shouldGenerateHtml,
  shouldCreateRuntimeChunk,
  shouldUseReactRefresh,
  // plugins
  plugins: {
    MiniCssExtractPlugin,
    ESLintPlugin,
    HtmlWebpackPlugin,
  },
};
```

### How to use

`npx create-react-app my-app --scripts-version @vbait/react-scripts --template cra-template-ab-typescript`
