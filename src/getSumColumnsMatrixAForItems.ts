import getTransposedMatrix from './getTransposedMatrix';
import decimalAdjust from './decimalAdjust';
import {Matrix} from './index';

const getSumColumnsMatrixAForItems = (matrixAForItems: Matrix[]): Matrix => {
	return matrixAForItems.map((matrix: Matrix) => {
			return getTransposedMatrix(matrix).map((column: number[]) => {
				return column.reduce((accumulator: number, currentValue: number) => decimalAdjust(accumulator + currentValue), 0);
			});
		},
	);
};

export default getSumColumnsMatrixAForItems;