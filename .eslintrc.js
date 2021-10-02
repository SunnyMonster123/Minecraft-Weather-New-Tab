module.exports = {
    env: {
        browser: true,
        webextensions: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 12,
    },
    rules: {
        indent: ['error', 4],
        'import/extensions': 'off',
        'max-len': 'off',
    },
};
