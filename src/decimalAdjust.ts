const decimalAdjust = (value: number): number => {
	if (isNaN(value)) return NaN;
	
	let newValue: string[] | number = value.toString().split('e');
	newValue = Math.round(Number(newValue[0] + 'e' + (newValue[1] ? (Number(newValue[1]) + 3) : 3)));
	newValue = newValue.toString().split('e');
	return Number(newValue[0] + 'e' + (newValue[1] ? (Number(newValue[1]) - 3) : -3));
};

export default decimalAdjust;