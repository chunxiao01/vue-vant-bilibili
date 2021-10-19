/*
 * @Author: chunxiao
 * @Github: https://github.com/chunxiao01
 * @Version: V-0.0.1
 * @License: MIT
 * @Date: 2021-10-18 11:21:57
 * @LastEditTime: 2021-10-18 14:48:13
 * @LastEditors: chunxiao
 * @Description:
 */
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        style: true
      },
      "vant"
    ]
  ]
};
