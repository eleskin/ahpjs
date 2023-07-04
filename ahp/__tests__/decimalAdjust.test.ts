import decimalAdjust from '../decimalAdjust';

test('decimalAdjust', () => {
	expect(decimalAdjust(55.5555)).toBe(55.556);
});