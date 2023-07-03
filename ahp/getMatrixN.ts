import {Matrix} from './index';
import getSumMatrixColumns from './getSumMatrixColumns';
import getCR from './getCR';
import getOmega from './getOmega';
import getTransposedMatrix from './getTransposedMatrix';

const getMatrixN = (matrix: Matrix) => {
	const matrixN = matrix.map((column, index) => {
		return column.map((item) => item / getSumMatrixColumns(matrix)[index]);
	});
	const array = matrixN.flat();
	if (matrixN.length === [...new Set(array)].length) {
		return matrixN;
	} else {
		if (getCR(matrix, matrixN, getOmega(getTransposedMatrix(matrixN))) >= 0.1) {
			alert('Матрица рассогласована');
			throw new Error('Матрица рассогласована');
		} else {
			return matrixN;
		}
	}
};

export default getMatrixN;