// vendors
import { useEffect, useState } from 'react'
import { InputAdornment, TextField as TextFieldVendor } from '@mui/material'
// data
import categoriesDataset from '../data/categories'

export default function TextField({
    code,
    toParent,
    onBlur,
    ...props
}: {
    code: string
    toParent: (value: number) => void
    onBlur?: () => void
    value?: string | number
    isError?: boolean
}) {
    const [value, setValue] = useState(props.value?.toString() ?? '')
    const [isError, setIsError] = useState(props.isError ? true : false)

    const category =
        code === 'price'
            ? {
                  name: 'Harga Jual',
                  unit: '/kg',
              }
            : code === 'totalWeight'
              ? {
                    name: 'Total Bobot (Berat / Tonase)',
                    unit: 'kg',
                }
              : getCategory(code)

    const helperText = isError
        ? 'Mohon melengkapi isian'
        : category && 'rules' in category
          ? getHelperText(category.rules)
          : undefined

    useEffect(() => setIsError(props?.isError ?? false), [props.isError])

    useEffect(() => setValue(props.value?.toString() ?? ''), [props.value])

    return (
        <TextFieldVendor
            value={value}
            onChange={e => {
                if (isError) setIsError(false)
                toParent(parseFloat(e.target.value))
                return setValue(e.target.value)
            }}
            label={category?.name}
            onBlur={onBlur}
            error={isError}
            helperText={helperText}
            InputProps={{
                startAdornment:
                    code === 'price' ? (
                        <InputAdornment position="start">Rp</InputAdornment>
                    ) : (
                        ''
                    ),
                endAdornment: (
                    <InputAdornment position="end">
                        {category?.unit}
                    </InputAdornment>
                ),
                inputMode: 'numeric',
                // pattern: "[0-9]*",
                inputProps: { min: 0 },
            }}
            fullWidth
            margin="dense"
            type="number"
            required
            autoComplete="off"
        />
    )
}

function getHelperText(rules: { operation: string; operand: number }[]) {
    const subtractionRule = rules.find(rule => rule.operation === 'subtraction')

    if (subtractionRule && subtractionRule.operand === 1)
        return 'potongan 100% / reject'

    return undefined
}

function getCategory(code: string) {
    return categoriesDataset.find(category => category.code === code)
}
