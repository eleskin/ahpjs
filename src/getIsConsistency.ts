const getIsConsistency = (cr: number): void => {
	if (cr >= 0.1) throw new Error('Матрица рассогласована');
};

export default getIsConsistency;