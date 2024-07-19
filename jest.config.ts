import type { Config } from 'jest';

const config: Config = {
	verbose: true,
	preset: 'ts-jest',
	coverageReporters: ['json-summary', 'text', 'lcov'],
};

export default config;
