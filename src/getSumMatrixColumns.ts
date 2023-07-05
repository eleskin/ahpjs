import {Matrix} from './index';
import decimalAdjust from './decimalAdjust';

const getSumMatrixColumns = (matrix: Matrix): number[] => {
	return matrix.map((column: number[]) => {
		return decimalAdjust(
			column.reduce((accumulator: number, currentValue: number) => decimalAdjust(accumulator + currentValue), 0)
		);
	}).reverse();
};

export default getSumMatrixColumns;