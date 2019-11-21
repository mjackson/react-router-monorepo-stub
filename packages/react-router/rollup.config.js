import babel from "rollup-plugin-babel";
import compiler from "@ampproject/rollup-plugin-closure-compiler";
import ignore from "rollup-plugin-ignore";
import replace from "rollup-plugin-replace";
import { terser } from "rollup-plugin-terser";

import { name } from "./package.json";

export default [
  {
    input: "modules/index.js",
    output: {
      file: `build/${name}.development.js`,
      format: "esm",
      sourcemap: true
    },
    external: ["react", "prop-types"],
    plugins: [
      babel({
        exclude: /node_modules/,
        runtimeHelpers: true,
        sourceMaps: true
      }),
      replace({ "process.env.NODE_ENV": JSON.stringify("development") })
    ]
  },
  {
    input: "modules/index.js",
    output: {
      file: `build/${name}.production.js`,
      format: "esm",
      sourcemap: true
    },
    external: ["react"],
    plugins: [
      babel({
        exclude: /node_modules/,
        runtimeHelpers: true,
        sourceMaps: true
      }),
      ignore(["prop-types"]),
      replace({ "process.env.NODE_ENV": JSON.stringify("production") }),
      compiler({
        compilation_level: "SIMPLE_OPTIMIZATIONS"
      }),
      terser()
    ]
  },

  // umd
  {
    input: "modules/index.js",
    output: {
      file: `build/umd/${name}.development.js`,
      format: "umd",
      name,
      sourcemap: true,
      globals: { react: "React", "prop-types": "PropTypes" }
    },
    external: ["react", "prop-types"],
    plugins: [
      babel({
        exclude: /node_modules/,
        runtimeHelpers: true,
        sourceMaps: true
      }),
      replace({ "process.env.NODE_ENV": JSON.stringify("development") })
    ]
  },
  {
    input: "modules/index.js",
    output: {
      file: `build/umd/${name}.production.js`,
      format: "umd",
      name,
      sourcemap: true,
      globals: { react: "React" }
    },
    external: ["react"],
    plugins: [
      babel({
        exclude: /node_modules/,
        runtimeHelpers: true,
        sourceMaps: true
      }),
      ignore(["prop-types"]),
      replace({ "process.env.NODE_ENV": JSON.stringify("production") }),
      compiler({
        compilation_level: "SIMPLE_OPTIMIZATIONS"
      }),
      terser()
    ]
  }
];
