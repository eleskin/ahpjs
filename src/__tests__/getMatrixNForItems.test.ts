import getMatrixNForItems from '../getMatrixNForItems';

test('getMatrixNForItems', () => {
	const matrixAForItems = [[
		[1, 0.098, 0.124],
		[10.165, 1, 1.265],
		[8.038, 0.791, 1],
	]];
	
	const result = getMatrixNForItems(matrixAForItems);
	const expectedResult = [[
		[0.052, 0.052, 0.052],
		[0.529, 0.529, 0.53],
		[0.419, 0.419, 0.419],
	]];
	
	expect(result).toStrictEqual(expectedResult);
});