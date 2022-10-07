/** @param { import('webpack-chain') } config */
module.exports = function useSwc(config) {
  const swcLoaderPath = require.resolve("swc-loader");
  /** ==== loader ==== */
  config.module.rule("js").use("babel-loader").loader(swcLoaderPath).options({});
  config.module.rule("ts").use("babel-loader").loader(swcLoaderPath).options({});
  config.module.rule("tsx").use("babel-loader").loader(swcLoaderPath).options({});
  config.module.rule("ts").uses.delete("ts-loader");
  config.module.rule("tsx").uses.delete("ts-loader");
  /** ==== end loader ==== */

  config.optimization.minimizer("terser").tap((args) => {
    args[0] = {
      ...args[0],
      minify: require("terser-webpack-plugin").swcMinify,
    };

    delete args[0].terserOptions;

    return args;
  });

  config.optimization.minimizer("css").tap((args) => {
    args[0] = {
      ...args[0],
      minify: require("css-minimizer-webpack-plugin").lightningCssMinify,
    };

    delete args[0].minimizerOptions;

    return args;
  });
};
