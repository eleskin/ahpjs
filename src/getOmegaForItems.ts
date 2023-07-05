import decimalAdjust from './decimalAdjust';

const getOmegaForItems = (matrixNForItems) => {
	return matrixNForItems.map((matrix) => {
		return matrix.map((row) => {
			const rowSum = row.reduce((accumulator, currentValue) => decimalAdjust(accumulator + currentValue), 0);
			return decimalAdjust(rowSum / row.length);
		});
	});
};

export default getOmegaForItems;