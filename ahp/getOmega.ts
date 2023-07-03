const getOmega = (matrix) => {
	return matrix.map((row) => {
		const rowSum = row.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
		return rowSum / row.length;
	});
};

export default getOmega;