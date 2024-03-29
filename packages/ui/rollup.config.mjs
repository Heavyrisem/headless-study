
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";

import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";

const isWatchMode = process.env.ROLLUP_WATCH;
const extensions = [".ts", ".tsx", ".js", ".jsx"];

const plugins = [
    babel({
        extensions,
        include: ["src/**/*"],
        exclude: "node_modules/**",
        // babelHelpers: "bundled",
        // presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"]
    }),
    commonjs(),
    resolve({ extensions }),
    peerDepsExternal(),
    json(),
    !isWatchMode && terser(),
]

export default [
    {
        input: "src/index.ts",
        output: [
            {
                dir: "dist/cjs",
                format: "cjs",
                sourcemap: true,
            },
        ],
        plugins,
    }
    , {
        input: "src/index.ts",
        output: [
            {
                dir: "dist/esm",
                format: "esm",
                sourcemap: true,
                preserveModules: true,
                preserveModulesRoot: "src",
            },
        ],
        plugins,
    },
];