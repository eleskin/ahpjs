import decimalAdjust from './decimalAdjust';
import {Matrix} from './index';

const getOmegaForItems = (matrixNForItems: Matrix[]): Matrix => {
	return matrixNForItems.map((matrix: Matrix) => {
		return matrix.map((row: number[]) => {
			const rowSum: number = row.reduce((accumulator, currentValue) => decimalAdjust(accumulator + currentValue), 0);
			return decimalAdjust(rowSum / row.length);
		});
	});
};

export default getOmegaForItems;