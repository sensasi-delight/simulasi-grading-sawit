import Box from '@mui/material/Box'

import TextField from './text-field'

export default function Form({
    inputCodes,
    values,
    isErrors,
    handleNext,
}: {
    inputCodes: string[]
    values: Record<string, number>
    isErrors: Record<string, boolean>
    handleNext: () => void
}) {
    return (
        <Box
            component="form"
            onSubmit={e => {
                e.preventDefault()
                handleNext()
            }}>
            {inputCodes.map(code => (
                <TextField
                    key={code}
                    code={code}
                    value={values[code] || ''}
                    isError={isErrors[code]}
                    onValueChange={value => {
                        values[code] = value
                    }}
                />
            ))}
        </Box>
    )
}
