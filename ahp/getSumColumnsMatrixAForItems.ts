import getTransposedMatrix from './getTransposedMatrix';

const getSumColumnsMatrixAForItems = (matrixAForItems) => {
	return matrixAForItems.map((matrix) => {
			return getTransposedMatrix(matrix).map((column) => {
				return column.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
			});
		},
	);
};

export default getSumColumnsMatrixAForItems;