import Rule from './rule'

enum CategoryCodeEnum {
    nRaw = 'nRaw',
    nUnripe = 'nUnripe',
    nEmptyLadder = 'nEmptyLadder',
    nRipe = 'nRipe',
    nLongRod = 'nLongRod',
    nSmallLadder = 'nSmallLadder',
    nRestan = 'nRestan',
    nRipenedUnripe = 'nRipenedUnripe',
    nPiece = 'nPiece',
    nDirtyPiece = 'nDirtyPiece',
}

export default class Category {
    code: CategoryCodeEnum
    description: string
    rules: Rule[]
    constructor(code: CategoryCodeEnum, description: string, rules: Rule[]) {
        this.code = code
        this.description = description
        this.rules = rules
    }
}
