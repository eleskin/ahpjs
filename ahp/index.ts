import getMatrixN from './getMatrixN';
import getMatrixAForItems from './getMatrixAForItems';
import getMatrixNForItems from './getMatrixNForItems';
import getOmegaForItems from './getOmegaForItems';
import getCR from './getCR';
import getOmega from './getOmega';
import getResultOmega from './getResultOmega';
import getClearMatrixA from './getClearMatrixA';
import getIsConsistency from './getIsConsistency';

export type Matrix = number[][];

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