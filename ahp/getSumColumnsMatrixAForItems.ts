import getTransposedMatrix from './getTransposedMatrix';
import decimalAdjust from './decimalAdjust';

const getSumColumnsMatrixAForItems = (matrixAForItems) => {
	return matrixAForItems.map((matrix) => {
			return getTransposedMatrix(matrix).map((column) => {
				return column.reduce((accumulator, currentValue) => decimalAdjust(accumulator + currentValue), 0);
			});
		},
	);
};

export default getSumColumnsMatrixAForItems;