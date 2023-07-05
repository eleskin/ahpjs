import {Matrix} from './index';
import getSumMatrixColumns from './getSumMatrixColumns';
import getCR from './getCR';
import getOmega from './getOmega';
import getTransposedMatrix from './getTransposedMatrix';
import decimalAdjust from './decimalAdjust';
import getIsConsistency from './getIsConsistency';

const getMatrixN = (matrixA: Matrix): Matrix => {
	const transposedMatrixA = getTransposedMatrix(matrixA)
	const matrixN: Matrix = transposedMatrixA.map((column: number[], index: number) => {
		return column.map((item: number) => decimalAdjust(item / getSumMatrixColumns(matrixA)[index]));
	});
	const transposedMatrixN = getTransposedMatrix(matrixN);
	const array = transposedMatrixN.flat();
	const omega = getOmega(transposedMatrixN);
	if (transposedMatrixN.length === [...new Set(array)].length) {
		return transposedMatrixN;
	} else {
		const cr: number = getCR(transposedMatrixN.length, matrixA, omega);
		getIsConsistency(cr);
		
		return transposedMatrixN;
	}
};

export default getMatrixN;