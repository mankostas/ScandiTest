module.exports = {
    extends: [
        '@scandipwa',
    ],
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
        requireConfigFile: false,
        babelOptions: {
            parserOpts: {
                plugins: ['jsx'],
            },
        },
    },
    rules: {
        '@typescript-eslint/object-curly-spacing': 0,
        // TODO: disable or enable rules here
        'react/forbid-dom-props': 0,
        'react/jsx-no-bind': 0,
        "simple-import-sort/imports": 0,
    },
};

