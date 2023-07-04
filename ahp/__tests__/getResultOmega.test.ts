import getResultOmega from '../getResultOmega';

test('getResultOmega', () => {
	const matrix = [
		[0.129, 0.277, 0.594],
		[0.545, 0.273, 0.182],
	];
	const omega = [0.17, 0.83];
	
	const result = getResultOmega(matrix, omega);
	const expectedResult = [0.474, 0.274, 0.252];
	
	expect(result).toStrictEqual(expectedResult);
});