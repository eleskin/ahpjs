import getMultipliedMatrix from './getMultipliedMatrix';
import {Matrix} from './index';
import decimalAdjust from './decimalAdjust';

const getCR = (n: number, matrixA: Matrix, omega: number[]) => {
	const formattedOmega: Matrix = omega.map((item: number) => [item]);
	const vector: number[] = getMultipliedMatrix(matrixA, formattedOmega)
		.map((row: number[]) => row.filter((item: number) => !isNaN(item))).flat();
	const nMax: number = vector.reduce((accumulator: number, currentValue: number) => accumulator + currentValue, 0);
	const CI: number = (nMax - n) / (n - 1);
	const RI: number = (1.98 * (n - 2)) / n;
	return decimalAdjust(CI / RI);
};

export default getCR;