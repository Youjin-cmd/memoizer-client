module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react-refresh", "prettier", "import", "@stylexjs"],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "no-console": "warn",
    "import/prefer-default-export": "warn",
    "@stylexjs/valid-styles": [
      "error",
      {
        "propLimits": {
          "mask+([a-zA-Z])": {
            "limit": null,
            "reason": "Use the `mask` shorthand property instead."
          },
          "fontSize": {
            "limit": "number",
            "reason": "Only numeric font values are allowed"
          },
          "padding": {
            "limit": [0, 4, 8, 16, 32, 64],
            "reason": "Use a padding that conforms to the design system"
          }
        }
      }
    ],
  },
}
