const WARN = "warn";
const OFF = "off";
const ERROR = "error";

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/style",
    "plugin:jest/recommended"
    // "prettier"
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  parserOptions: {
    // ecmaVersion: 2020,
    sourceType: "module",
    project: [
      "./tsconfig.eslint.json",
      "./packages/*/tsconfig.json"
      /**
       * We are currently in the process of transitioning to nx's out of the box structure and
       * so need to manually specify converted packages' tsconfig.build.json and tsconfig.spec.json
       * files here for now in addition to the tsconfig.json glob pattern.
       *
       * TODO(#4665): Clean this up once all packages have been transitioned.
       */
    ],
    tsconfigRootDir: __dirname
  },
  rules: {
    "no-console": [WARN, { allow: [WARN] }],
    "no-param-reassign": [2, { props: false }],
    // 某些时候在明确依赖的时候，可以跳过 exhaustive-deps，以及依赖没有提供类型定义的时候进行忽略
    "@typescript-eslint/ban-ts-comment": OFF,
    "@typescript-eslint/no-non-null-assertion": WARN,
    "@typescript-eslint/unbound-method": OFF,
    "@typescript-eslint/member-ordering": OFF,
    "no-unused-expressions": OFF,
    "no-plusplus": OFF,
    "lines-between-class-members": OFF,
    "no-param-reassign": OFF,
    "@typescript-eslint/no-non-null-assertion": OFF,
    "class-methods-use-this": OFF,
    "require-jsdoc": OFF,
    "object-curly-newline": OFF,
    "arrow-parens": OFF,
    "generator-star-spacing": OFF
  }
};
