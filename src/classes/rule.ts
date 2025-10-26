type Operation = 'addition' | 'subtraction'

export default class Rule {
    operation: Operation
    limit: {
        type: string
        value: number
    }
    operand: number
    description: string

    constructor(
        operation: Operation,
        limit: any,
        operand: number,
        description: string,
    ) {
        this.operation = operation
        this.limit = limit
        this.operand = operand
        this.description = description
    }
}
