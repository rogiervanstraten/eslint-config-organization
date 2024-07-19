import { ESLint } from 'eslint';
import path from 'path';

const ***REMOVED***EslintConfig = path.resolve(__dirname, '../dist/index.js');

describe('ESLint Config', () => {
	let eslint: ESLint;

	beforeAll(() => {
		eslint = new ESLint({
			useEslintrc: false,
			overrideConfigFile: ***REMOVED***EslintConfig,
		});
	});

	it('should not have any errors for valid code', async () => {
		const codeExample = "const foo = 'bar';\nconsole.log(foo);\n";
		const results = await eslint.lintText(codeExample);

		expect(results[0].errorCount).toBe(0);
		expect(results[0].warningCount).toBe(1);
	});

	it('should flag errors for invalid code', async () => {
		const codeExample = 'const foo = "bar";\nconsole.log(foo);';
		const results = await eslint.lintText(codeExample);

		expect(results[0].errorCount).toBeGreaterThan(0);

		const quoteError = results[0].messages.find(msg => msg.ruleId === 'quotes');
		expect(quoteError).toBeDefined();
	});
});
