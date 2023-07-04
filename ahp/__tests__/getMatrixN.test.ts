import getMatrixN from '../getMatrixN';

test('getMatrixN', () => {
	const matrixA = [
		[1, 0.5, 0.2],
		[2, 1, 0.5],
		[5, 2, 1],
	];
	
	const result = getMatrixN(matrixA);
	const expectedResult = [
		[0.125, 0.143, 0.118],
		[0.25, 0.286, 0.294],
		[0.625, 0.571, 0.588],
	];
	
	expect(result).toStrictEqual(expectedResult);
});