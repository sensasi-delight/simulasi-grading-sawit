export default class Item {
	static totalInUnit: number = 0;
	static totalInWeight: number = 0;

	weight: number;
	worth: number;
	qty: number;
	category: Category;

	constructor(category: Category, weight: number, worth: number, qty: number) {
		this.weight = weight;
		this.worth = worth;
		this.qty = qty;
		this.category = category;
	}
}