import getMatrixN from './getMatrixN';
import getClearMatrixA from './getClearMatrixA';
import getMatrixAForItems from './getMatrixAForItems';
import getMatrixNForItems from './getMatrixNForItems';
import getOmegaForItems from './getOmegaForItems';
import getCR from './getCR';
import getOmega from './getOmega';
import getIsConsistency from './getIsConsistency';
import getResultOmega from './getResultOmega';
import {Matrix} from './index';

const getHierarchyAnalysisResult = ({items, params, weights}: {
	items: { [key: string]: number; }[],
	params: string[],
	weights: Matrix
}): number[] => {
	const matrixN: Matrix = getMatrixN(weights);
	const clearMatrixA = getClearMatrixA(items, params);
	const matrixAForItems = getMatrixAForItems(clearMatrixA);
	const matrixNForItems = getMatrixNForItems(matrixAForItems);
	const omegaForItems = getOmegaForItems(matrixNForItems);
	const cr = getCR(matrixN.length, weights, getOmega(matrixN));
	
	getIsConsistency(cr);
	
	return getResultOmega(omegaForItems, getOmega(matrixN));
};

export default getHierarchyAnalysisResult;