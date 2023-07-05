import getOmega from '../getOmega';

test('getOmega', () => {
	const matrixA = [
		[4, 3, 6],
		[3, 3, 4],
		[4, 3, 4],
	];
	
	const result = getOmega(matrixA);
	const expectedResult = [4.333, 3.333, 3.667];
	
	expect(result).toStrictEqual(expectedResult);
});