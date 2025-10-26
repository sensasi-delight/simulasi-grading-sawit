import type { CategoryCode } from '../types/category-code'
import type Rule from './rule'

export default class Category {
    code: CategoryCode
    description: string
    rules: Rule[]
    constructor(code: CategoryCode, description: string, rules: Rule[]) {
        this.code = code
        this.description = description
        this.rules = rules
    }
}
