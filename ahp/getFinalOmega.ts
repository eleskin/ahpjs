const getFinalOmega = (matrix, omega) => {
	return matrix.map((row) => {
		return row.map((item, index) => {
			return item * omega[index];
		}).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
	});
};

export default getFinalOmega;