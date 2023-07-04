import getMatrixAForItems from '../getMatrixAForItems';

test('getMatrixAForItems', () => {
	const matrix = [[45866, 466242, 368692]];
	
	const result = getMatrixAForItems(matrix);
	const expectedResult = [
		[
			[1, 0.098, 0.124],
			[10.165, 1, 1.265],
			[8.038, 0.791, 1]
		]
	];
	
	expect(result).toStrictEqual(expectedResult);
});