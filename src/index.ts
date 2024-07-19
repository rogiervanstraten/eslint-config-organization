import { Linter } from 'eslint';

const config: Linter.Config = {
    extends: 'airbnb-base',
    rules: {
        'no-console': ['warn'],
        indent: ['error', 4],
        'no-nested-ternary': ['error'],
    },
};

export = config;
