import getMatrixN from './getMatrixN';
import getMatrixAForItems from './getMatrixAForItems';
import getTransposedMatrix from './getTransposedMatrix';
import getMatrixNForItems from './getMatrixNForItems';
import getOmegaForItems from './getOmegaForItems';
import getCR from './getCR';
import getOmega from './getOmega';
import getResultOmega from './getResultOmega';

export type Matrix = number[][];

const getHierarchyAnalysisResult = ({items, params, weights}: {
	items: { [key: string]: number; }[],
	params: string[],
	weights: Matrix
}): number[] => {
	const matrixN: Matrix = getMatrixN(weights);
	const matrixAForItems = getMatrixAForItems(getTransposedMatrix(items.map((channel) => {
		Object.keys(channel).forEach((field) => {
			if (!params.includes(field)) delete channel[field];
		});
		return channel;
	}).map((item) => Object.values(item))));
	const matrixNForItems = getMatrixNForItems(matrixAForItems);
	const omegaForItems = getOmegaForItems(matrixNForItems);
	if (getCR(matrixN.length, weights, getOmega(getTransposedMatrix(matrixN))) >= 0.1) {
		alert('Матрица рассогласована');
		//throw new Error('Матрица рассогласована');
	}
	return getResultOmega(getTransposedMatrix(omegaForItems), getOmega(getTransposedMatrix(matrixN)));
};

export default getHierarchyAnalysisResult;