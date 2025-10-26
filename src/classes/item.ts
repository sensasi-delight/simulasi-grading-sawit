import type { CategoryCode } from '../types/category-code'
import type Category from './category'
import type Rule from './rule'

export default class Item {
    static totalInUnit = 0
    static totalInWeight = 0

    weight: number
    worth: number
    qty: number
    category: {
        code: CategoryCode
        description: string
        rules: Rule[]
    }

    constructor(
        category: Category,
        weight: number,
        worth: number,
        qty: number,
    ) {
        this.weight = weight
        this.worth = worth
        this.qty = qty
        this.category = category
    }
}
