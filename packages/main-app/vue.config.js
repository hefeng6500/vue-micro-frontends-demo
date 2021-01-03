const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
    config.resolve.alias.set("@kit/test-a", resolve("../@kit/test-a/index.js"));
    config.resolve.alias.set(
      "@kit/app-module-loader",
      resolve("../@kit/app-module-loader/index.js")
    );
    config.resolve.alias.set("@kit/page", resolve("../@kit/page/index.js"));
  }
};
