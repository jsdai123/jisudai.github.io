module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true
    },
    plugins: [
        'html'
    ],
    globals: {
        "$": true,
    },
    extends: "eslint:recommended",
    rules: {
        'no-console': 0,
        "no-undef": 0,
        "no-case-declarations": 0
    }
};
