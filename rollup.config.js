import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";

const globalLibs = {
  react: "React"
};

export default {
  input: "src/index.tsx",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      globals: globalLibs
    },
    {
      file: pkg.module,
      format: "es",
      globals: globalLibs
    }
  ],
  external: ["react"],
  plugins: [
    typescript({
      clean: true,
      typescript: require("typescript"),
      verbosity: 0
    })
  ]
};
