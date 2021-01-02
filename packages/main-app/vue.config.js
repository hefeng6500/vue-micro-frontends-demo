const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  chainWebpack: config => {
    console.log("test", resolve("../@kit/test-a"));
    config.resolve.alias.set("@", resolve("src"));
    config.resolve.alias.set(
      "@kit/test-a",
      resolve("../@kit/test-a/src/index.js")
    );
  }
};
