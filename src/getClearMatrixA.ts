import getTransposedMatrix from './getTransposedMatrix';
import {Matrix} from './index';

const getClearMatrixA = (items: { [key: string]: number; }[], params: string[]): Matrix => {
	return getTransposedMatrix(items.map((channel: { [key: string]: number; }) => {
		Object.keys(channel).forEach((field: string) => {
			if (!params.includes(field)) delete channel[field];
		});
		return channel;
	}).map((item: { [key: string]: number; }) => Object.values(item)));
};

export default getClearMatrixA;