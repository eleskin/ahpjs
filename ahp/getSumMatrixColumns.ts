import {Matrix} from './index';

const getSumMatrixColumns = (matrix: Matrix): number[] => {
	return matrix.map((column) => {
		return column.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
	});
};

export default getSumMatrixColumns;