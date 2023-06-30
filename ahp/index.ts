type Matrix = number[][];

const getMultipliedMatrix = (a, b): Matrix => {
	const rowsA = a.length;
	const colsA = a[0].length;
	const rowsB = b.length;
	const colsB = [b][0].length;
	const c = [];
	if (colsA !== rowsB) return [];
	for (let i = 0; i < rowsA; i++) c[i] = [];
	for (let k = 0; k < colsB; k++) {
		for (let i = 0; i < rowsA; i++) {
			let t = 0;
			for (let j = 0; j < rowsB; j++) t += a[i][j] * b[j][k];
			c[i][k] = t;
		}
	}
	return c;
};

const getSumMatrixColumns = (matrix: Matrix): number[] => {
	return matrix.map((column) => {
		return column.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
	});
};

const getSumColumnsMatrixAForItems = (matrixAForItems) => {
	return matrixAForItems.map((matrix) => {
			return getTransposedMatrix(matrix).map((column) => {
				return column.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
			});
		},
	);
};

const getTransposedMatrix = (matrix: Matrix): Matrix => {
	return matrix[0].map((col, i) => matrix.map((row) => row[i]));
};

const getOmega = (matrix) => {
	return matrix.map((row) => {
		const rowSum = row.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
		return rowSum / row.length;
	});
};

const getCR = (matrixN, matrixA, omega) => {
	const vector = getMultipliedMatrix(
		getTransposedMatrix(matrixA), omega.map((item) => [item]),
	).map((row) => row.filter((item) => !isNaN(item))).flat();
	const n = matrixN.length;
	const nMax = vector.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
	const CI = (nMax - n) / (n - 1);
	const RI = (1.98 * (n - 2)) / n;
	return CI / RI;
};


const getMatrixA = (matrix: Matrix) => getTransposedMatrix(matrix.map((row) => {
	return row.map((item) => Number(item));
}));

const getMatrixN = (matrix: Matrix) => {
	const matrixN = matrix.map((column, index) => {
		return column.map((item) => item / getSumMatrixColumns(matrix)[index]);
	});
	const array = matrixN.flat();
	if (matrixN.length === [...new Set(array)].length) {
		return matrixN;
	} else {
		if (getCR(matrix, matrixN, getOmega(getTransposedMatrix(matrixN))) >= 0.1) {
			alert('Матрица рассогласована');
			throw new Error('Матрица рассогласована');
		} else {
			return matrixN;
		}
	}
};

const getMatrixNForItems = (matrixAForItems) => {
	return matrixAForItems.map((matrix, indexMatrix) => {
		return getTransposedMatrix(matrix).map((column, index) => {
			return column.map((item) => {
				return item / getSumColumnsMatrixAForItems(matrixAForItems)[indexMatrix][index];
			});
		});
	});
};

const getMatrixAForItems = (weights) => weights
	.map((row) => {
		return row.map((rowItem) => {
			return weights.map((item, index) => {
				return rowItem / row[index];
			});
		});
	})
	.map((matrix) => matrix.map((row) => row.filter(item => !!item)));

const getOmegaForItems = (matrixNForItems) => {
	return matrixNForItems.map((matrix) => {
		return getTransposedMatrix(matrix).map((row) => {
			const rowSum = row.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
			return rowSum / row.length;
		});
	});
};

const getFinalOmega = (matrix, omega) => {
	return matrix.map((row) => {
		return row.map((item, index) => {
			return item * omega[index];
		}).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
	});
};

const getHierarchyAnalysisResult = ({items, params, weights}: {
	items: { [key: string]: number; }[],
	params: string[],
	weights: Matrix
}): number[] => {
	const matrixA: Matrix = getMatrixA(weights);
	const matrixN: Matrix = getMatrixN(matrixA);
	const matrixAForItems = getMatrixAForItems(getTransposedMatrix(items.map((channel) => {
		Object.keys(channel).forEach((field) => {
			if (!params.includes(field)) delete channel[field];
		});
		return channel;
	}).map((item) => Object.values(item))));
	const matrixNForItems = getMatrixNForItems(matrixAForItems);
	const omegaForItems = getOmegaForItems(matrixNForItems);
	if (getCR(matrixN, matrixA, getOmega(getTransposedMatrix(matrixN))) >= 0.1) {
		alert('Матрица рассогласована');
		throw new Error('Матрица рассогласована');
	}
	return getFinalOmega(getTransposedMatrix(omegaForItems), getOmega(getTransposedMatrix(matrixN)));
};

export default getHierarchyAnalysisResult;