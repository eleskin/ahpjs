import {Matrix} from './index';
import getSumMatrixColumns from './getSumMatrixColumns';
import getCR from './getCR';
import getOmega from './getOmega';
import getTransposedMatrix from './getTransposedMatrix';
import decimalAdjust from './decimalAdjust';
import getIsConsistency from './getIsConsistency';

const getMatrixN = (matrixA: Matrix): Matrix => {
	const transposedMatrixA: Matrix = getTransposedMatrix(matrixA)
	const matrixN: Matrix = transposedMatrixA.map((column: number[], index: number) => {
		return column.map((item: number) => decimalAdjust(item / getSumMatrixColumns(matrixA)[index]));
	});
	const transposedMatrixN: Matrix = getTransposedMatrix(matrixN);
	const array: number[] = transposedMatrixN.flat();
	const omega: number[] = getOmega(transposedMatrixN);
	if (transposedMatrixN.length === [...new Set(array)].length) {
		return transposedMatrixN;
	} else {
		const cr: number = getCR(transposedMatrixN.length, matrixA, omega);
		getIsConsistency(cr);
		
		return transposedMatrixN;
	}
};

export default getMatrixN;