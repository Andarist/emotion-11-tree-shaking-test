import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import { terser } from "rollup-plugin-terser";

export default {
  input: "./src/index.js",
  output: {
    file: "./dist/main-rollup.js",
    format: "esm",
  },
  external: ["react", "react-dom"],
  plugins: [
    nodeResolve({ browser: true }),
    commonjs(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    terser({
      mangle: false,
      compress: {
        passes: 2,
      },
    }),
  ],
};
