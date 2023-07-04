import getMatrixN from '../getMatrixN';

test('getMatrixN', () => {
	const matrixA = [
		[1, 2, 4],
		[0.5, 1, 2],
		[0.25, 0.5, 1],
	];
	
	const result = getMatrixN(matrixA);
	const expectedResult = [
		[0.57, 0.29, 0.14],
		[1.14, 0.57, 0.29],
		[2.29, 1.14, 0.57],
	];
	
	expect(result).toStrictEqual(expectedResult);
});