import getSumColumnsMatrixAForItems from '../getSumColumnsMatrixAForItems';

test('getSumColumnsMatrixAForItems', () => {
	const matrixAForItems = [[
		[1, 0.098, 0.124],
		[10.165, 1, 1.265],
		[8.038, 0.791, 1],
	]];
	
	const result = getSumColumnsMatrixAForItems(matrixAForItems);
	const expectedResult = [[19.203, 1.889, 2.389]];
	
	expect(result).toStrictEqual(expectedResult);
});