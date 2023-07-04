import {Matrix} from './index';

const getResultOmega = (matrix: Matrix, omega: number[]): number[] => {
	return matrix.map((row: number[]) => {
		return row
			.map((item: number, index: number) => item * omega[index])
			.reduce((accumulator: number, currentValue: number) => accumulator + currentValue, 0);
	});
};

export default getResultOmega;