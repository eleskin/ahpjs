import {Matrix} from './index';
import decimalAdjust from './decimalAdjust';
import getTransposedMatrix from './getTransposedMatrix';

const getResultOmega = (matrix: Matrix, omega: number[]): number[] => {
	return getTransposedMatrix(matrix).map((row: number[]) => {
		return row
			.map((item: number, index: number) => decimalAdjust(item * omega[index]))
			.reduce((accumulator: number, currentValue: number) => decimalAdjust(accumulator + currentValue), 0);
	});
};

export default getResultOmega;