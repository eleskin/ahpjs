import getSumColumnsMatrixAForItems from './getSumColumnsMatrixAForItems';
import getTransposedMatrix from './getTransposedMatrix';

const getMatrixNForItems = (matrixAForItems) => {
	return matrixAForItems.map((matrix, indexMatrix) => {
		return getTransposedMatrix(matrix).map((column, index) => {
			return column.map((item) => {
				return item / getSumColumnsMatrixAForItems(matrixAForItems)[indexMatrix][index];
			});
		});
	});
};

export default getMatrixNForItems;