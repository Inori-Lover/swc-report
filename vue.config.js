const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig(() => {
  return {
    transpileDependencies: true,
    configureWebpack: {
      resolve: {
        alias: {
          lodash: "lodash-es",
        },
      },
      plugins: [],
    },
    chainWebpack(config) {
      /** ===== 替换使用swc编译 ===== */
      require("./config/vue/config/useSwc")(config);
      /** ===== end 替换使用swc编译 ===== */
    },
  };
});
