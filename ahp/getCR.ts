import getMultipliedMatrix from './getMultipliedMatrix';
import getTransposedMatrix from './getTransposedMatrix';
import {Matrix} from './index';
import decimalAdjust from './decimalAdjust';

const getCR = (n: number, matrixA: Matrix, omega: number[]) => {
	const transposedMatrixA: Matrix = getTransposedMatrix(matrixA);
	const formattedOmega: Matrix = omega.map((item: number) => [item]);
	const vector: number[] = getMultipliedMatrix(matrixA, formattedOmega)
		.map((row: number[]) => row.filter((item: number) => !isNaN(item))).flat();
	console.log(transposedMatrixA);
	console.log(formattedOmega);
	console.log(vector);
	const nMax: number = vector.reduce((accumulator: number, currentValue: number) => accumulator + currentValue, 0);
	const CI: number = (nMax - n) / (n - 1);
	const RI: number = (1.98 * (n - 2)) / n;
	return CI / RI;
};

export default getCR;