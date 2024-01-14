export default {
  extends: "@trybe/eslint-config-frontend/typescript",
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
};
