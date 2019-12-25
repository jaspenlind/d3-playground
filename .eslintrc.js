module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "react-app",
    "prettier",
    "prettier/react",
    "plugin:prettier/recommended"
  ],
  plugins: ["@typescript-eslint", "react", "prettier"],
  rules: {
    "import/prefer-default-export": ["off"],
    "no-restricted-syntax": ["off", "ForOfStatement"],
    "@typescript-eslint/explicit-function-return-type": ["off"],
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        accessibility: "explicit",
        overrides: {
          constructors: "no-public"
        }
      }
    ]
  }
};
