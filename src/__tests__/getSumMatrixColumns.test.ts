import getSumMatrixColumns from '../getSumMatrixColumns';

test('getSumMatrixColumns', () => {
	const matrixA = [
		[1, 2, 4],
		[0.5, 1, 2],
		[0.25, 0.5, 1],
	];
	
	const result = getSumMatrixColumns(matrixA);
	const expectedResult = [1.75, 3.5, 7];
	
	expect(result).toStrictEqual(expectedResult);
});