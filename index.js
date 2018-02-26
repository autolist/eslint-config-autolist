require('eslint-plugin-import')
require('eslint-plugin-jest')

module.exports = {
    extends: [
        "airbnb-base",
        "prettier"
    ],
    plugins: [
        'jsx-a11y',
        'react',
    ],
    rules: {
        "import/no-named-as-default-member": 'off',
        'react/jsx-uses-vars': 'error',
        "no-console": 'off',
        'class-methods-use-this': 'warn',
        'react/no-multi-comp': 'off',
        'no-unused-expressions': ["error", {
            "allowTernary": true
        }],
        'max-len': 'warn',
    },
};
