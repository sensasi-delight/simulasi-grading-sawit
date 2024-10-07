enum OperationEnum {
	addition = 'addition',
	subtraction = 'subtraction'
}

export default class Rule {
	operation: OperationEnum;
	limit: {
		type: string;
		value: number;
	};
	operand: number;
	description: string;

	constructor(operation: OperationEnum, limit: any, operand: number, description: string) {
		this.operation = operation;
		this.limit = limit;
		this.operand = operand;
		this.description = description;
	}
}