import { ESLint } from 'eslint';
import path from 'path';

describe('ESLint Config', () => {
    let eslint: ESLint;

    beforeAll(() => {
        eslint = new ESLint({
            overrideConfigFile: path.resolve(__dirname, '../dist/index.js'),
        });
    });

    it('should load the config correctly', async () => {
        const results = await eslint.lintFiles(['./dist/index.js']);
        expect(results.length).toBeGreaterThan(0);

        console.log(results[0].messages);

        const config = results[0].messages;
        expect(config.length).toBe(0);
    });

    it('should not have any errors for valid code', async () => {
        const results = await eslint.lintText(
            'const foo = \'bar\';\nconsole.log(foo);\n',
        );

        expect(results[0].errorCount).toBe(0);
        expect(results[0].warningCount).toBe(0);
    });

    it('should flag errors for invalid code', async () => {
        const results = await eslint.lintText(
            'const foo = "bar";\nconsole.log(foo);',
        );
        expect(results[0].errorCount).toBeGreaterThan(0);
        const quoteError = results[0].messages.find((msg) => msg.ruleId === 'quotes');
        expect(quoteError).toBeDefined();
    });
});
