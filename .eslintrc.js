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
        '@typescript-eslint/object-curly-spacing': 'off',
        // TODO: disable or enable rules here
        'react/forbid-dom-props': '1',
        'react/jsx-no-bind': '0'
    },
};

