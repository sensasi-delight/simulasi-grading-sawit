import { InputAdornment, TextField } from "@mui/material";
import { memo } from "react";

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

const areEqual = (oldProps, newProps) => oldProps.value === newProps.value && oldProps.isError === newProps.isError

const MyTextField = (props) => {
	return <TextField
		autoFocus={props.id === 'price' || props.id === 'nLongRod' ? true : false}

		id={props.id}
		// name={props.id}
		value={props.value}
		onChange={props.handleValueChange}
		label={inputLabels[props.id]}

		error={props.isError}
		helperText={props.isError ? 'Mohon melengkapi isian' : ''}

		InputProps={{
			startAdornment: props.id === 'price' ? <InputAdornment position="start">Rp</InputAdornment> : '',
			endAdornment: <InputAdornment position="end">{props.id === 'nPiece' || props.id === 'nDirtyPiece' || props.id === 'price' ? (props.id === 'price' ? '/' : '') + 'kg' : 'Janjang'}</InputAdornment>,
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

export default memo(MyTextField, areEqual)
// export default MyTextField