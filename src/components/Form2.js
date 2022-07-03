import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

export default function Form2(props) {
	const formValue = props.formValue
	const isError = props.isError
	const handleValueChange = props.handleValueChange

	return (
		<>
			<TextField
				value={formValue.nLongRod}
				onChange={handleValueChange}
				error={isError.nLongRod}
				helperText={isError.nLongRod ? 'Mohon melengkapi isian' : ''}
				margin="dense"
				type="number"
				required
				fullWidth
				id="nLongRod"
				label="Tangkai Panjang"
				name="nLongRod"
				autoComplete="off"
				InputProps={{
					endAdornment: <InputAdornment position="end">Janjang</InputAdornment>,
					inputMode: 'numeric', pattern: '[0-9]*',
					inputProps: { min: 0 }
				}}

			/>

			<TextField
				value={formValue.nSmallLadder}
				onChange={handleValueChange}
				error={isError.nSmallLadder}
				helperText={isError.nSmallLadder ? 'Mohon melengkapi isian' : ''}
				margin="dense"
				type="number"
				required
				fullWidth
				id="nSmallLadder"
				label="Janjang Kecil < 3kg"
				name="nSmalladder"
				autoComplete="off"
				InputProps={{
					endAdornment: <InputAdornment position="end">Janjang</InputAdornment>,
					inputMode: 'numeric', pattern: '[0-9]*',
					inputProps: { min: 0 }
				}}

			/>



			<TextField
				value={formValue.nPiece}
				onChange={handleValueChange}
				error={isError.nPiece}
				helperText={isError.nPiece ? 'Mohon melengkapi isian' : ''}
				margin="dense"
				type="number"
				required
				fullWidth
				id="nPiece"
				label="Berondolan"
				name="nPiece"
				autoComplete="off"
				InputProps={{
					endAdornment: <InputAdornment position="end">kg</InputAdornment>,
					inputMode: 'numeric', pattern: '[0-9]*',
					inputProps: { min: 0 }
				}}

			/>

			<TextField
				value={formValue.nDirtyPiece}
				onChange={handleValueChange}
				error={isError.nDirtyPiece}
				helperText={isError.nDirtyPiece ? 'Mohon melengkapi isian' : ''}
				margin="dense"
				type="number"
				required
				fullWidth
				id="nDirtyPiece"
				label="Berondolan Kotor"
				name="nDirtyPiece"
				autoComplete="off"
				InputProps={{
					endAdornment: <InputAdornment position="end">kg</InputAdornment>,
					inputMode: 'numeric', pattern: '[0-9]*',
					inputProps: { min: 0 }
				}}

			/>

			<TextField
				value={formValue.nWeight}
				onChange={handleValueChange}
				error={isError.nWeight}
				helperText={isError.nWeight ? 'Mohon melengkapi isian' : ''}
				margin="dense"
				type="number"
				required
				fullWidth
				id="nWeight"
				label="Total Bobot Keseluruhan"
				name="nWeight"
				autoComplete="off"
				InputProps={{
					endAdornment: <InputAdornment position="end">kg</InputAdornment>,
					inputMode: 'numeric', pattern: '[0-9]*',
					inputProps: { min: 0 }
				}}

			/>
		</>
	)
}