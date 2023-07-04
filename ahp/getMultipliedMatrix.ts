import {Matrix} from './index';
import decimalAdjust from './decimalAdjust';

const getMultipliedMatrix = (a: Matrix, b: Matrix): Matrix => {
	const rowsA: number = a.length;
	const colsA: number = a[0].length;
	const rowsB: number = b.length;
	const colsB: number = [b][0].length;
	const c: Matrix = [];
	if (colsA !== rowsB) return [];
	for (let i = 0; i < rowsA; i++) c[i] = [];
	for (let k = 0; k < colsB; k++) {
		for (let i = 0; i < rowsA; i++) {
			let t = 0;
			for (let j = 0; j < rowsB; j++) t += decimalAdjust(a[i][j] * b[j][k]);
			c[i][k] = t;
		}
	}
	return c;
};

export default getMultipliedMatrix;