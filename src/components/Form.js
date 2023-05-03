import PropTypes from 'prop-types';

import Button from "@mui/material/Button";
import Box from '@mui/material/Box';

import TextField from "./TextField";

const SX_SUBMIT_BUTTON = { display: 'none' }

const Form = ({ inputCodes, values, isErrors, handleNext }) => {
	const TextFields = inputCodes.map(code =>
		<TextField
			key={code}
			code={code}
			value={values[code] || ''}
			isError={isErrors[code]}
			setIsError={isErrors[code]}

			toParent={value => values[code] = value}
		/>
	)

	const handleSubmit = (e) => {
		e.preventDefault()
		return handleNext()
	}

	return (
		<Box component='form' onSubmit={handleSubmit}>
			{TextFields}
			<Button type='submit' sx={SX_SUBMIT_BUTTON}></Button>
		</Box>
	)
}

Form.propTypes = {
	inputCodes: PropTypes.arrayOf(PropTypes.string),
	values: PropTypes.object
};

export default Form