const path = require("path");

exports.onCreatePage = async ({page, actions}) =>{
  const {createPage} = actions
  console.log('Page - ' + page.page);
  if(page.path.match(/^\/stake/)){
      createPage({
          path: "/stake",
          matchPath: "/stake/:id",
          component: path.resolve("src/pages/stake.tsx")
      })
  }
}

exports.onCreateWebpackConfig = ({ plugins, loaders, actions }) => {
  actions.setWebpackConfig({
    // Work around for Buffer is undefined:
    // https://github.com/webpack/changelog-v5/issues/10
    plugins: [
      plugins.provide({
        Buffer: ["buffer", "Buffer"],
      }),
    ],
    resolve: {
      fallback: {
        // assert: require.resolve('assert'),
        // crypto: require.resolve("crypto-browserify"),
        // http: require.resolve('stream-http'),
        // https: require.resolve('https-browserify'),
        // os: require.resolve('os-browserify/browser'),
        // stream: require.resolve("stream-browserify"),
        buffer: require.resolve("buffer"),
      },
    },
  });
};
