import { resolve } from "node:path";

export default {
  entry: "./index.js",
  mode: "production",
  output: {
    path: resolve("./dist"),
    filename: "[name].js",
  },
  resolve: {
    alias: {
      "@workspace/core": resolve("dist/libs/core"),
    },
    extensions: [".js"],
    exportsFields: ["exports"],
  },
};
