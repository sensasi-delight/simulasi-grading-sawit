import PropTypes from 'prop-types';

import Button from "@mui/material/Button";
import Fade from "@mui/material//Fade";
import Grid from "@mui/material/Grid";

import TextField from "./TextField";

const SX_SUBMIT_BUTTON = { display: 'none' }
const SX_FADE_TIMEOUT = { enter: 700, exit: 100 }


const Form = ({ id, inputIds, values, isErrors, handleNext }) => {
	// console.count(id)

	const TextFields = inputIds.map(inputId =>
		<TextField
			key={inputId}
			id={inputId}
			value={values[inputId]}
			isError={isErrors[inputId]}
			setIsError={isErrors[inputId]}

			toParent={value => values[inputId] = value}
		/>
	)

	const handleSubmit = (e) => {
		e.preventDefault()
		return handleNext()
	}

	return (
		<Fade in={true} timeout={SX_FADE_TIMEOUT}>
			<Grid item id={id} component='form' onSubmit={handleSubmit}>
				{TextFields}
				<Button type='submit' sx={SX_SUBMIT_BUTTON}></Button>
			</Grid>
		</Fade>
	)
}

Form.propTypes = {
	inputIds: PropTypes.arrayOf(PropTypes.string),
	values: PropTypes.object
};

export default Form