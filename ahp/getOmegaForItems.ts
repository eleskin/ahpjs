import getTransposedMatrix from './getTransposedMatrix';

const getOmegaForItems = (matrixNForItems) => {
	return matrixNForItems.map((matrix) => {
		return getTransposedMatrix(matrix).map((row) => {
			const rowSum = row.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
			return rowSum / row.length;
		});
	});
};

export default getOmegaForItems;