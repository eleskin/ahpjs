import getSumColumnsMatrixAForItems from './getSumColumnsMatrixAForItems';
import getTransposedMatrix from './getTransposedMatrix';
import {Matrix} from './index';
import decimalAdjust from './decimalAdjust';

const getMatrixNForItems = (matrixAForItems: Matrix[]): Matrix[] => {
	return matrixAForItems.map((matrix: Matrix, indexMatrix: number) => {
		const transposedMatrix: Matrix = getTransposedMatrix(matrix);
		return getTransposedMatrix(transposedMatrix.map((column: number[], index: number) => {
			return column.map((item: number) => {
				return decimalAdjust(item / getSumColumnsMatrixAForItems(matrixAForItems)[indexMatrix][index]);
			});
		}));
	});
};

export default getMatrixNForItems;