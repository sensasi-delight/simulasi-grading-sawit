import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import categoriesDataset from "../data/categories";

const getCategory = (code) => categoriesDataset.find(category => category.code === code);

const MyTextField = ({ code, toParent, onBlur, ...props }) => {
	const [value, setValue] = useState(isNaN(props.value) ? '' : props.value.toString());
	const [isError, setIsError] = useState(props.isError ? true : false);

	let temp = {};
	
	if (code === 'price' || code === 'totalWeight') {

		if (code === 'price') {
			temp = {
				name: 'Harga Jual',
				unit: '/kg'
			}
		}

		if (code === 'totalWeight') {
			temp = {
				name: 'Total Bobot (Berat / Tonase)',
				unit: 'kg'
			}
		}
	} else {
		temp = getCategory(code);
	}

	const category = temp;

	const getHelperText = () => {
		const subtractionRule = category.rules?.find(rule => rule.operation === 'subtraction');
		if (subtractionRule && subtractionRule.operand === 1) return 'potongan 100% / reject';
		if (isError) return 'Mohon melengkapi isian';

		return '';
	}

	useEffect(() => setIsError(props.isError), [props.isError]);
	
	useEffect(() => setValue(props.value), [props.value]);

	const handleOnChange = (e) => {
		if (isError) setIsError(false)
		toParent(parseFloat(e.target.value))
		return setValue(e.target.value)
	}

	return <TextField
		value={value}
		onChange={handleOnChange}
		label={category.name}

		onBlur={onBlur}

		error={isError}
		helperText={getHelperText()}

		InputProps={{
			startAdornment: code === 'price' ? <InputAdornment position="start">Rp</InputAdornment> : '',
			endAdornment: <InputAdornment position="end">{category.unit}</InputAdornment>,
			inputMode: 'numeric', pattern: '[0-9]*',
			inputProps: { min: 0 }
		}}

		// style & type
		size="small"
		fullWidth
		margin="dense"
		type="number"
		required
		autoComplete="off"
	/>
}

MyTextField.propTypes = {
	code: PropTypes.string.isRequired,
	toParent: PropTypes.func.isRequired,
	value: PropTypes.oneOfType([
		PropTypes.string.isRequired,
		PropTypes.number.isRequired
	])
};

export default MyTextField