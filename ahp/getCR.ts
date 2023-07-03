import getMultipliedMatrix from './getMultipliedMatrix';
import getTransposedMatrix from './getTransposedMatrix';

const getCR = (matrixN, matrixA, omega) => {
	const vector = getMultipliedMatrix(
		getTransposedMatrix(matrixA), omega.map((item) => [item]),
	).map((row) => row.filter((item) => !isNaN(item))).flat();
	const n = matrixN.length;
	const nMax = vector.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
	const CI = (nMax - n) / (n - 1);
	const RI = (1.98 * (n - 2)) / n;
	return CI / RI;
};

export default getCR;