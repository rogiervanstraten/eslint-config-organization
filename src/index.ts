import { Linter } from 'eslint';

const config: Linter.Config = {
    extends: 'airbnb-base',
    rules: {
        indent: ['error', 4],
        quotes: ['error', 'single'],
    },
};

export = config;
