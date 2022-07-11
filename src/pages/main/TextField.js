import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

const inputLabels = {
	nRipe: 'Buah Matang',
	nRaw: 'Buah Mentah',
	nUnripe: 'Buah Lewat Matang',
	nEmptyLadder: 'Janjang Kosong',
	nRestan: 'Buah Menginap',
	nLongRod: 'Tangkai Panjang',
	nSmallLadder: 'Janjang Kecil',
	nPiece: 'Berondolan',
	nDirtyPiece: 'Berondolan Kotor',
	nWeight: 'Bobot Keseluruhan',
	price: 'Asumsi Harga'
}

const unitKgIds = ['nPiece', 'nDirtyPiece', 'nWeight', 'price']

const getUnit = (id) => {
	return (id === 'price' ? '/' : '') + (unitKgIds.includes(id) ? 'kg' : 'Janjang')
}

const MyTextField = ({ id, toParent, ...props }) => {
	// console.count(id);

	const [value, setValue] = useState(isNaN(props.value) ? '' : props.value.toString())
	const [isError, setIsError] = useState(props.isError ? true : false)

	useEffect(() => setIsError(props.isError), [props.isError])


	const handleOnChange = (e) => {
		if (isError) setIsError(false)
		toParent(parseFloat(e.target.value))
		return setValue(e.target.value)
	}

	return <TextField
		autoFocus={!value && (id === 'price' || id === 'nLongRod') ? true : false}

		id={id}
		value={value}
		onChange={handleOnChange}
		label={inputLabels[id]}

		error={isError}
		helperText={isError ? 'Mohon melengkapi isian' : ''}

		InputProps={{
			startAdornment: id === 'price' ? <InputAdornment position="start">Rp</InputAdornment> : '',
			endAdornment: <InputAdornment position="end">{getUnit(id)}</InputAdornment>,
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
	id: PropTypes.string.isRequired,
	toParent: PropTypes.func.isRequired,
	value: PropTypes.oneOfType([
		PropTypes.string.isRequired,
		PropTypes.number.isRequired
	])
};

export default MyTextField