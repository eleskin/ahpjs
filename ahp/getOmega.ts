import {Matrix} from './index';
import decimalAdjust from './decimalAdjust';

const getOmega = (matrix: Matrix): number[] => {
	return matrix.map((row: number[]) => {
		const rowSum: number = row.reduce((accumulator: number, currentValue: number) => accumulator + currentValue, 0);
		return decimalAdjust(rowSum / row.length);
	});
};

export default getOmega;