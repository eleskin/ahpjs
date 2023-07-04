import getMultipliedMatrix from '../getMultipliedMatrix';

test('getMultipliedMatrix', () => {
	const matrixA = [
		[4, 3, 6],
		[3, 3, 4],
		[4, 3, 4],
	];
	const matrixB = [
		[1, 3, 4],
		[1, 2, 3],
		[2, 2, 1],
	];
	
	const result = getMultipliedMatrix(matrixA, matrixB);
	const expectedResult = [
		[19, 30, 31],
		[14, 23, 25],
		[15, 26, 29],
	];
	
	expect(result).toStrictEqual(expectedResult);
});