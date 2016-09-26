module.exports = {
  "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "jest": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:flowtype/recommended"
    ],
    "parserOptions": {
        "sourceType": "module"
    },
    "plugins": [
      "flowtype"
    ],
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
