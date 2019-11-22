import babel from "rollup-plugin-babel";
import ignore from "rollup-plugin-ignore";
import nodeResolve from "rollup-plugin-node-resolve";
import replace from "@rollup/plugin-replace";

import { name } from "./package.json";

export default [
  {
    input: "modules/index.js",
    output: { file: `build/${name}.development.js`, format: "esm" },
    external: ["react", "prop-types", "react-native"],
    plugins: [
      babel({
        exclude: /node_modules/,
        runtimeHelpers: true,
        presets: [
          [
            "module:metro-react-native-babel-preset",
            {
              disableImportExportTransform: true,
              enableBabelRuntime: false
            }
          ]
        ]
      }),
      nodeResolve(),
      replace({ "process.env.NODE_ENV": JSON.stringify("development") })
    ]
  },
  {
    input: "modules/index.js",
    output: { file: `build/${name}.production.js`, format: "esm" },
    external: ["react", "react-native"],
    plugins: [
      babel({
        exclude: /node_modules/,
        runtimeHelpers: true,
        presets: [
          [
            "module:metro-react-native-babel-preset",
            {
              disableImportExportTransform: true,
              enableBabelRuntime: false,
              withDevTools: false
            }
          ]
        ]
      }),
      ignore(["prop-types"]),
      nodeResolve(),
      replace({ "process.env.NODE_ENV": JSON.stringify("production") })
    ]
  }
];
