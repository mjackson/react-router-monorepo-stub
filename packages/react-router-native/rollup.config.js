import babel from "rollup-plugin-babel";
import ignore from "rollup-plugin-ignore";
import nodeResolve from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";

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
        sourceMaps: true,
        presets: [
          [
            "module:metro-react-native-babel-preset",
            {
              disableImportExportTransform: true,
              enableBabelRuntime: false
            }
          ]
        ],
        plugins: [["@babel/plugin-transform-runtime", { useESModules: true }]]
      }),
      nodeResolve(),
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
        sourceMaps: true,
        plugins: [["@babel/plugin-transform-runtime", { useESModules: true }]]
      }),
      ignore(["prop-types"]),
      nodeResolve(),
      replace({ "process.env.NODE_ENV": JSON.stringify("production") })
    ]
  }
];
