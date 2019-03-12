const index = require('./index.js');

describe('API', () => {
    test('Works for seconds', () => {
        expect(index("7 seconds")).toBe(7000);
    });
});
