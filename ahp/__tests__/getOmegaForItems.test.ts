import getOmegaForItems from '../getOmegaForItems';

test('getOmegaForItems', () => {
	const matrixN = [[
		[0.125, 0.143, 0.118],
		[0.25, 0.286, 0.294],
		[0.625, 0.571, 0.588],
	]];
	
	const result = getOmegaForItems(matrixN);
	const expectedResult = [[0.129, 0.277, 0.595]];
	
	expect(result).toStrictEqual(expectedResult);
});