import {Matrix} from './index';

const getTransposedMatrix = (matrix: Matrix): Matrix => {
	return matrix[0].map((col, i) => matrix.map((row) => row[i]));
};

export default getTransposedMatrix;