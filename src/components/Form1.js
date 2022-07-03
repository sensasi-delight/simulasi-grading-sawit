import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";


export default function Form1(props) {
	const formValue = props.formValue
	const isError = props.isError
	const handleValueChange = props.handleValueChange
	
	return (
		<>
			<TextField
				value={formValue.nRipe}
				onChange={handleValueChange}
				error={isError.nRipe}
				helperText={isError.nRipe ? 'Mohon melengkapi isian' : ''}
				type="number"
				margin="dense"
				required
				fullWidth
				id="nRipe"
				label="Buah Matang"
				name="nRipe"
				autoComplete="off"
				InputProps={{
					endAdornment: <InputAdornment position="end">Janjang</InputAdornment>,
					inputMode: 'numeric',
					pattern: '[0-9]*',
					inputProps: { min: 0 }
				}}
			/>

			<TextField
				value={formValue.nRaw}
				onChange={handleValueChange}
				error={isError.nRaw}
				helperText={isError.nRaw ? 'Mohon melengkapi isian' : ''}
				margin="dense"
				type="number"
				required
				fullWidth
				id="nRaw"
				label="Buah Mentah"
				name="nRaw"
				autoComplete="off"
				InputProps={{
					endAdornment: <InputAdornment position="end">Janjang</InputAdornment>,
					inputMode: 'numeric', pattern: '[0-9]*',
					inputProps: { min: 0 }
				}}
			/>

			<TextField
				value={formValue.nUnripe}
				onChange={handleValueChange}
				error={isError.nUnripe}
				helperText={isError.nUnripe ? 'Mohon melengkapi isian' : ''}
				margin="dense"
				type="number"
				required
				fullWidth
				id="nUnripe"
				label="Buah Lewat Matang"
				name="nUnripe"
				autoComplete="off"
				InputProps={{
					endAdornment: <InputAdornment position="end">Janjang</InputAdornment>,
					inputMode: 'numeric', pattern: '[0-9]*',
					inputProps: { min: 0 }
				}}

			/>

			<TextField
				value={formValue.nEmptyLadder}
				onChange={handleValueChange}
				error={isError.nEmptyLadder}
				helperText={isError.nEmptyLadder ? 'Mohon melengkapi isian' : ''}
				margin="dense"
				type="number"
				required
				fullWidth
				id="nEmptyLadder"
				label="Buah Janjang Kosong"
				name="nEmptyLadder"
				autoComplete="off"
				InputProps={{
					endAdornment: <InputAdornment position="end">Janjang</InputAdornment>,
					inputMode: 'numeric', pattern: '[0-9]*',
					inputProps: { min: 0 }
				}}

			/>

			<TextField
				value={formValue.nRestan}
				onChange={handleValueChange}
				error={isError.nRestan}
				helperText={isError.nRestan ? 'Mohon melengkapi isian' : ''}
				margin="dense"
				type="number"
				required
				fullWidth
				id="nRestan"
				label="Buah Menginap"
				name="nRestan"
				autoComplete="off"
				InputProps={{
					endAdornment: <InputAdornment position="end">Janjang</InputAdornment>,
					inputMode: 'numeric', pattern: '[0-9]*',
					inputProps: { min: 0 }
				}}

			/>
		</>
	)
}