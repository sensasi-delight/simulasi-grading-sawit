import Button from "@mui/material/Button";
import Box from '@mui/material/Box';

import TextField from "./text-field";

const SX_SUBMIT_BUTTON = { display: 'none' }

const Form = ({ inputCodes, values, isErrors, handleNext }: {
    inputCodes: string[],
    values: { [key: string]: number },
    isErrors: { [key: string]: boolean },
    handleNext: () => void
}) => {
	const TextFields = inputCodes.map(code =>
		<TextField
			key={code}
			code={code}
			value={values[code] || ''}
			isError={isErrors[code]}
			// setIsError={isErrors[code]}

			toParent={value => values[code] = value}
		/>
	)

	return (
		<Box component='form' onSubmit={(e) => {
            e.preventDefault()
            return handleNext()
        }}>
			{TextFields}
			<Button type='submit' sx={SX_SUBMIT_BUTTON}></Button>
		</Box>
	)
}

export default Form