import {Matrix} from './index';

const getTransposedMatrix = (matrix: Matrix): Matrix => {
	return matrix[0].map((col: number, i: number) => matrix.map((row: number[]) => row[i]));
};

export default getTransposedMatrix;