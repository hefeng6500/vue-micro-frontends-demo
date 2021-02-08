import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel, getBabelOutputPlugin } from "@rollup/plugin-babel";

export default {
  input: "index.js",
  output: {
    file: "dist/app-module-loader.js",
    format: "esm",
    name: "appModuleLoader",
    sourcemap: true,
    plugins: [getBabelOutputPlugin({ presets: ["@babel/preset-env"] })]
  },
  plugins: [commonjs(), babel({ babelHelpers: "bundled" }), nodeResolve()],
  external: []
};
