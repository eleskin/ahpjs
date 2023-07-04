import decimalAdjust from '../decimalAdjust';

test('Ad', () => {
	expect(decimalAdjust(55.55)).toBe(55.6);
});