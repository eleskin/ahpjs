import {Matrix} from './index';
import getTransposedMatrix from './getTransposedMatrix';

const getMatrixA = (matrix: Matrix) => getTransposedMatrix(matrix.map((row) => {
	return row.map((item) => Number(item));
}));

export default getMatrixA;