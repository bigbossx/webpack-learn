const path = require("path");
module.exports = {
  entry: {
    index: "./src/index.js"
  },
  output: {
    filename: "boundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
