/* eslint-disable sort-keys, no-magic-numbers */
module.exports = {
  extends: [
    "react-app",
    "eslint:all",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:react/recommended",
    "plugin:flowtype/recommended",
    "prettier"
  ],

  plugins: ["import", "prettier", "flowtype", "filenames"],

  rules: {
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        aspects: ["invalidHref"]
      }
    ],
    "prettier/prettier": "error",
    "jsx-quotes": ["error", "prefer-double"],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index"
        ]
      }
    ],
    "import/no-unresolved": [
      "error",
      {
        commonjs: true,
        caseSensitive: true
      }
    ],
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        jsx: "never"
      }
    ],
    "import/no-extraneous-dependencies": "error",
    "import/first": 2,
    "import/no-duplicates": 2,
    "import/newline-after-import": 2,
    "no-console": 1,
    "no-debugger": 2,
    "comma-spacing": 2,
    "block-spacing": 2,
    "no-var": 2,
    "sort-keys": 2,
    "quote-props": [2, "as-needed"],
    quotes: 2,
    "one-var": [2, "never"],
    "keyword-spacing": 2,
    "key-spacing": 2,
    "space-before-blocks": 2,
    "space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "always"
      }
    ],
    "space-in-parens": 2,
    "space-infix-ops": 2,
    "space-unary-ops": 2,
    "spaced-comment": 2,
    "array-bracket-spacing": 2,
    "computed-property-spacing": 2,
    "func-call-spacing": 2,
    "semi-spacing": 2,
    "switch-colon-spacing": 2,
    "template-tag-spacing": 2,
    "max-len": [
      2,
      120,
      4,
      {
        ignoreUrls: false,
        ignoreComments: false,
        ignoreTrailingComments: false,
        ignoreStrings: false,
        ignoreTemplateLiterals: false,
        ignoreRegExpLiterals: false
      }
    ],
    "no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used"
      }
    ],
    "func-names": ["error", "never"],
    "no-use-before-define": [
      "error",
      {
        functions: true,
        classes: true
      }
    ],
    curly: 2,

    "react/no-unescaped-entities": 0,
    "no-ternary": 0,
    "require-jsdoc": 0,
    "no-process-env": 0,
    "sort-imports": 0,
    "func-style": 0,
    "no-underscore-dangle": 0,
    "no-undefined": 0,
    "no-invalid-this": 0,
    "no-warning-comments": 1,
    "class-methods-use-this": 0,
    "no-magic-numbers": [
      "error",
      {
        ignore: [-1, 0, 1, 2, 3, 4]
      }
    ],
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "*",
        next: "return"
      },
      {
        blankLine: "always",
        prev: ["const", "let", "var"],
        next: "*"
      },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"]
      }
    ],
    "flowtype/no-dupe-keys": 2,
    "filenames/match-exported": 2
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx"]
      }
    }
  }
};
