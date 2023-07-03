import {Matrix} from './index';

const getMultipliedMatrix = (a, b): Matrix => {
	const rowsA = a.length;
	const colsA = a[0].length;
	const rowsB = b.length;
	const colsB = [b][0].length;
	const c = [];
	if (colsA !== rowsB) return [];
	for (let i = 0; i < rowsA; i++) c[i] = [];
	for (let k = 0; k < colsB; k++) {
		for (let i = 0; i < rowsA; i++) {
			let t = 0;
			for (let j = 0; j < rowsB; j++) t += a[i][j] * b[j][k];
			c[i][k] = t;
		}
	}
	return c;
};

export default getMultipliedMatrix;