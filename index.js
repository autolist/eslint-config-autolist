require('eslint-plugin-import')
require('eslint-plugin-jest')

module.exports = {
    "parser": "babel-eslint",
    extends: [
        "airbnb-base",
        "prettier"
    ],
    plugins: [
        'jsx-a11y',
        'react',
        'babel'
    ],
    rules: {
        "import/no-named-as-default-member": 0,
        "no-console": 0,
        'class-methods-use-this': 'warn',
        'react/no-multi-comp': 'off',
        'no-unused-expressions': ["error", {
            "allowTernary": true
        }],
        'max-len': 'warn',
    },
    "settings": {
        // Reference the babel-module resolver definition
        // so we don't get an error about absolute imports from
        // directories like `components`
        "import/resolver": {
            "babel-module": {}
        }
    },
};
