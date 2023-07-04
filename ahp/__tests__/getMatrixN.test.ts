import getMatrixN from '../getMatrixN';

test('getMatrixN', () => {
	const matrixA = [
		[1, 2, 4],
		[0.5, 1, 2],
		[0.25, 0.5, 1],
	];
	
	const result = getMatrixN(matrixA);
	const expectedResult = [
		[1 / .75, 2, 4],
		[0.5, 1, 2],
		[0.25, 0.5, 1],
	];
	
	expect(result).toStrictEqual(expectedResult);
});