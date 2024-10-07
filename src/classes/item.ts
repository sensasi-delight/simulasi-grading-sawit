import Category from "./category";
import Rule from "./rule";

export default class Item {
	static totalInUnit: number = 0;
	static totalInWeight: number = 0;

	weight: number;
	worth: number;
	qty: number;
	category: {
		code: CategoryCodeEnum;
		description: string;
		rules: Array<Rule>;
	};

	constructor(category: Category, weight: number, worth: number, qty: number) {
		this.weight = weight;
		this.worth = worth;
		this.qty = qty;
		this.category = category;
	}
}

enum CategoryCodeEnum {
	nRaw = "nRaw",
	nUnripe = "nUnripe",
	nEmptyLadder = "nEmptyLadder",
	nRipe = "nRipe",
	nLongRod = "nLongRod",
	nSmallLadder = "nSmallLadder",
	nRestan = "nRestan",
	nRipenedUnripe = "nRipenedUnripe",
	nPiece = "nPiece",
	nDirtyPiece = "nDirtyPiece",
}
