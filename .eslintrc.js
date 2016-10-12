module.exports = {
  "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "jest": true,
    },
    "extends": [
      "formidable/configurations/es6"
    ],
    "parserOptions": {
        "sourceType": "module"
    },
    "plugins": [
      "flowtype"
    ],
    "rules": {
      "no-magic-numbers": [
        "off"
      ],
      "quotes": [
        "error",
        "single"
      ],
      "max-params": [
        "error",
        4
      ]
    }
};
