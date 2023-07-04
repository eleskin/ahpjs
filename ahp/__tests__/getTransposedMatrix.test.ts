import getTransposedMatrix from '../getTransposedMatrix';

test('getTransposedMatrix', () => {
	const matrix = [
		[4, 3, 6],
		[3, 3, 4],
		[4, 3, 4],
	];
	
	const result = getTransposedMatrix(matrix);
	const expectedResult = [
		[4, 3, 4],
		[3, 3, 3],
		[6, 4, 4],
	];
	
	expect(result).toStrictEqual(expectedResult);
});