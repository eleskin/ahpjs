import getCR from '../getCR';

test('getCR', () => {
	const matrixA = [
		[1, 0.5, 0.2],
		[2, 1, 0.5],
		[5, 2, 1],
	];
	const omega = [0.129, 0.277, 0.594]
	
	const result = getCR(3, matrixA, omega);
	const expectedResult = 0.008;
	
	expect(result).toStrictEqual(expectedResult);
});
