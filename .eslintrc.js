module.exports = {
  root: true,
  env: {
    node: true,
    /** @see https://eslint.vuejs.org/user-guide/#compiler-macros-such-as-defineprops-and-defineemits-generate-no-undef-warnings */
    "vue/setup-compiler-macros": true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "off" : "warn",
    "no-debugger": process.env.NODE_ENV === "production" ? "off" : "warn",

    // 必须使用严格相等，==操作规则太复杂了
    eqeqeq: [2],
    // 解构时只有全部key都应该const时才触发prefer-const校验错误
    "prefer-const": [2, { destructuring: "all" }],
    // namespace仍然是组织业务的手段之一
    "@typescript-eslint/no-namespace": [0],
    // 空interface可能是占位
    "@typescript-eslint/no-empty-interface": [0],
    // ts没有any还有什么味道
    "@typescript-eslint/no-explicit-any": [0],
    // 约定高于格式，有些地方格式就是要接收4个参数，extends的时候就依照着写
    "@typescript-eslint/no-unused-vars": [0],
    // 空函数可用来做类型反推
    "@typescript-eslint/no-empty-function": [0],
    // let it crash
    "@typescript-eslint/no-non-null-assertion": [0],
    // 过渡期间，暂时允许编译
    "vue/no-mutating-props": [1],
    // ./index.vue 会被报错
    "vue/multi-word-component-names": [0],
  },
};
