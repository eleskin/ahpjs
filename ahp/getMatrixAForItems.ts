const getMatrixAForItems = (weights) => weights
	.map((row) => {
		return row.map((rowItem) => {
			return weights.map((item, index) => {
				return rowItem / row[index];
			});
		});
	})
	.map((matrix) => matrix.map((row) => row.filter(item => !!item)));

export default getMatrixAForItems;