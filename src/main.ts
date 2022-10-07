import { noop } from "lodash";
import { createApp } from "vue";

async function main() {
  const app = createApp({});
  app.config.errorHandler = noop;

  app.mount("#app");
}

main();
