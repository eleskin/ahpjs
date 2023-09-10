import {Matrix} from './index';
import decimalAdjust from './decimalAdjust';

const getMatrixAForItems = (matrix: Matrix): Matrix[] => {
	return matrix.map((row: number[]) => {
		return row.map((rowItem: number) => {
			const array: number[] = [];
			for (let index: number = 0; index < row.length; index++) {
				array.push(decimalAdjust(rowItem / row[index]));
			}
			return array;
		});
	}).map((matrix: Matrix) => matrix.map((row: number[]) => row.filter((item: number) => !!item)));
};


export default getMatrixAForItems;