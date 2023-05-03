import { currencyFormat, numberFormat } from '.';
import categoryDataset from '../data/categories';

let totalWeight = 0;
let pricePerKg = 0;

const setTotalWeight = (weight) => totalWeight = weight;
const setPricePerKg = price => pricePerKg = price;

const rulesCalculation = (rules, percentage) => rules.map(rule => {
	let diff = 0;
	let cutWorth = 0;
	let cutNote = '';
	let addWorth = 0;
	let addNote = '';

	if (rule.limit.type === 'max') {
		diff = percentage - rule.limit.value;
	}

	if (rule.limit.type === 'min') {
		diff = rule.limit.value - percentage;
	}

	if (diff > 0) {
		if (rule.operation === 'subtraction') {
			cutWorth = rule.operand * (diff * totalWeight) * pricePerKg;
			cutNote = `${rule.operand * 100}% × ${numberFormat(diff * 100)}% × ${totalWeight}kg × Rp. ${pricePerKg}`;
		}

		if (rule.operation === 'addition') {
			addWorth = rule.operand * (diff * totalWeight) * pricePerKg;
			addNote = `${rule.operand * 100}% × ${numberFormat(diff * 100)}% × ${totalWeight}kg × Rp. ${pricePerKg}`;
		}
	}

	return {
		cutWorth: cutWorth,
		cutNote: cutNote,
		addWorth: addWorth,
		addNote: addNote,
	}
}).reduce((acc, cur) => {
	return {
		cutWorth: acc.cutWorth + cur.cutWorth,
		addWorth: acc.addWorth + cur.addWorth,
		cutNote: acc.cutNote + cur.cutNote,
		addNote: acc.addNote + cur.addNote,
	}
}, {
	cutWorth: 0,
	addWorth: 0,
	cutNote: '',
	addNote: ''
});

const getResult = dataset => {
	setTotalWeight(dataset.totalWeight);
	setPricePerKg(dataset.pricePerKg);

	const totalLadder = ['BM', 'BLM', 'BMTG'].map(code => dataset[code]).reduce((acc, cur) => acc + cur, 0);

	const weightPerLadder = totalWeight / totalLadder;

	return categoryDataset.map(category => {
		const userInput = dataset[category.code];
		const weight = category.unit === 'kg' ? userInput : userInput * weightPerLadder;

		let percentage = weight / dataset.totalWeight;
		let percentageNote = `${numberFormat(weight)} / ${dataset.totalWeight} Kg`;


		if (category.unit !== 'kg') {
			percentage = userInput / totalLadder;
			percentageNote = `${numberFormat(userInput)} / ${totalLadder} Janjang`;
		}


		const worth = weight * pricePerKg;
		const { cutWorth, addWorth, cutNote, addNote } = rulesCalculation(category.rules, percentage);
		const finalWorth = worth - cutWorth + addWorth;

		return {
			qty: userInput,
			category: category,
			percentage: percentage,
			percentageNote: percentageNote,
			weight: weight,
			weightNote: category.unit !== 'kg' ? `${numberFormat(percentage * 100)}% × ${totalWeight}kg` : '',
			worth: worth,
			worthNote: `${numberFormat(weight)}kg × Rp. ${currencyFormat(pricePerKg)}`,
			cutWorth: cutWorth,
			cutNote: cutNote,
			addWorth: addWorth,
			addNote: addNote,
			finalWorth: finalWorth
		}
	})
}

export default getResult;