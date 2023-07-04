import {Matrix} from './index';
import getSumMatrixColumns from './getSumMatrixColumns';
import getCR from './getCR';
import getOmega from './getOmega';
import getTransposedMatrix from './getTransposedMatrix';

const getMatrixN = (matrixA: Matrix): Matrix => {
	const matrixN: Matrix = matrixA.map((column: number[], index: number) => {
		return column.map((item: number) => item / getSumMatrixColumns(matrixA)[index]);
	});
	const array = matrixN.flat();
	if (matrixN.length === [...new Set(array)].length) {
		return matrixN;
	} else {
		if (getCR(matrixA, matrixN, getOmega(getTransposedMatrix(matrixN))) >= 0.1) {
			throw new Error('Матрица рассогласована');
		} else {
			return matrixN;
		}
	}
};

export default getMatrixN;