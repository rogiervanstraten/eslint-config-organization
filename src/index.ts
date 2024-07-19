import { Linter } from 'eslint';

const config: Linter.Config = {
    extends: 'airbnb-base',
    rules: {
        'no-console': 'off', // Turn off the rule that disallows console.log statements
        indent: ['error', 4],
        quotes: ['error', 'single'],
    },
};

export = config;
