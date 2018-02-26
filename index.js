require('eslint-plugin-import')

module.exports = {
    extends: [
        "airbnb-base",
        "prettier"
    ],
    rules: {
        "import/no-named-as-default-member": 0,
        "no-console": 0,
        "arrow-body-style": "off",
        'one-var': 'off',
        'class-methods-use-this': 'warn',
        'no-unused-expressions': ["error", {
            "allowTernary": true
        }],
        'max-len': 'warn',
    }
};
