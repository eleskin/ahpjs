import decimalAdjust from '../decimalAdjust';

test('decimalAdjust', () => {
	expect(decimalAdjust(55.555)).toBe(55.56);
});