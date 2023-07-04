import {Matrix} from './index';
import getSumMatrixColumns from './getSumMatrixColumns';
import getCR from './getCR';
import getOmega from './getOmega';
import getTransposedMatrix from './getTransposedMatrix';
import decimalAdjust from './decimalAdjust';

const getMatrixN = (matrixA: Matrix): Matrix => {
	const matrixN: Matrix = matrixA.map((column: number[], index: number) => {
		return column.map((item: number) => decimalAdjust(item / getSumMatrixColumns(matrixA)[index]));
	});
	const array = matrixN.flat();
	if (matrixN.length === [...new Set(array)].length) {
		return matrixN;
	} else {
		if (getCR(matrixN.length, matrixA, getOmega(getTransposedMatrix(matrixN))) >= 0.1) {
			throw new Error('Матрица рассогласована');
		} else {
			return matrixN;
		}
	}
};

export default getMatrixN;